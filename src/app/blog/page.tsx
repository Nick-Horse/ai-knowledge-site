import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import TagBadge from "@/components/TagBadge";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "博客",
  description: "AI 知识笔记 — 从入门到进阶的 AI 文章",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">博客</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        探索 AI 世界的各种话题
      </p>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          还没有文章，敬请期待！
        </p>
      )}
    </div>
  );
}
