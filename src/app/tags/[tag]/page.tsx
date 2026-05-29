import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { getPostsByTag, getAllTags } from "@/lib/posts";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({ tag: encodeURIComponent(tag) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `#${decodeURIComponent(tag)}`,
    description: `关于「${decodeURIComponent(tag)}」的文章`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);
  const posts = getPostsByTag(decodedTag);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
      >
        <ArrowLeft size={16} /> 返回博客列表
      </Link>

      <h1 className="text-3xl font-bold mb-2">
        标签：<span className="text-purple-600 dark:text-purple-400">#{decodedTag}</span>
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        共 {posts.length} 篇文章
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          该标签下暂无文章
        </p>
      )}
    </div>
  );
}
