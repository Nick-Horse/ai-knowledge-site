import type { Metadata } from "next";
import { ExternalLink, Briefcase } from "lucide-react";
import { getAllProjects } from "@/lib/posts";

export const metadata: Metadata = {
  title: "作品集",
  description: "我的项目作品展示",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">作品集</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        我参与和开发的项目
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.link ?? "#"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-4">
              <Briefcase size={24} className="text-purple-600 dark:text-purple-400 flex-shrink-0" />
              {project.link && (
                <ExternalLink size={16} className="text-gray-400 dark:text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-shrink-0" />
              )}
            </div>
            <h2 className="text-lg font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {projects.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 py-12">
          还没有作品，敬请期待！
        </p>
      )}
    </div>
  );
}
