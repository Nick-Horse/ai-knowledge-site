import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}

export default function BlogCard({
  title,
  description,
  date,
  tags,
  slug,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="group p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-200">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
          <time dateTime={date}>
            {new Date(date).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h2 className="text-lg font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
