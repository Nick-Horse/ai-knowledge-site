import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase } from "lucide-react";
import BlogCard from "@/components/BlogCard";
import { getAllPosts, getAllProjects } from "@/lib/posts";
import { siteConfig } from "@/lib/constants";

export default function Home() {
  const posts = getAllPosts().slice(0, 4);
  const projects = getAllProjects().slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-400 dark:from-purple-400 dark:to-purple-300 bg-clip-text text-transparent">
          {siteConfig.name}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          {siteConfig.description}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
          >
            <BookOpen size={18} />
            浏览博客
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            关于我
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-1"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">精选作品</h2>
          <Link
            href="/projects"
            className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors inline-flex items-center gap-1"
          >
            查看全部 <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.link ?? "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
            >
              <Briefcase size={24} className="text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
