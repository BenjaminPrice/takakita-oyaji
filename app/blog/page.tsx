import { getSortedPostsData, formatDate, type BlogPost } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, User } from "lucide-react";

export default async function BlogPage() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="pt-24 pb-16 bg-bg-base">
      <div className="container-section">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-accent">ブログ</h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            高北おやじの会の活動記録や、今後のイベント情報、お知らせなどを掲載しています。
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center py-12 bg-bg-surface rounded-lg shadow">
            <p className="text-lg text-text-muted">現在、投稿はありません。</p>
            <p className="mt-2">最初の記事をお待ちください。</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post: BlogPost) => (
              <article key={post.slug} className="blog-card group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-text-muted mb-3 space-x-4">
                      <div className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        <time dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <div className="flex items-center">
                        <User className="mr-1 h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-muted line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
