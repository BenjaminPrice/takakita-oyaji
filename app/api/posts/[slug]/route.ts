import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return NextResponse.json(null, { status: 404 });
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return NextResponse.json({
      slug,
      contentHtml,
      ...(matterResult.data as { title: string; date: string; excerpt: string; author: string; image: string }),
    });
  } catch (error) {
    console.error('Error reading post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}