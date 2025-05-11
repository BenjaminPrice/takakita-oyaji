import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to Japanese format
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}年${month}月${day}日`;
}

// Types for blog posts
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  image: string;
  contentHtml?: string;
}

// Get all blog posts
export async function getSortedPostsData(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(process.cwd(), "content/blog");
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as {
          title: string;
          date: string;
          excerpt: string;
          author: string;
          image: string;
        }),
      };
    });

    // Sort posts by date
    const sortedPosts = allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    return sortedPosts;
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
}

// Get a single blog post
export async function getPostData(slug: string): Promise<BlogPost | null> {
  try {
    const postsDirectory = path.join(process.cwd(), "content/blog");
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      contentHtml,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        author: string;
        image: string;
      }),
    };
  } catch (error) {
    console.error("Error reading post:", error);
    return null;
  }
}
