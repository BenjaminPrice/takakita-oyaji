import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Activities from "@/components/home/Activities";
import BlogSection from "@/components/home/Blog";
import { getSortedPostsData } from "@/lib/utils";

export default async function Home() {
  // Get the latest 3 blog posts with proper error handling
  const allPosts = await getSortedPostsData();
  const recentPosts = Array.isArray(allPosts) ? allPosts.slice(0, 3) : [];

  return (
    <div>
      <Hero />
      <About />
      <Activities />
      <BlogSection posts={recentPosts} />
    </div>
  );
}
