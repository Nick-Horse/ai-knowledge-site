import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-purple-600 dark:text-purple-400 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">
        页面未找到
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
