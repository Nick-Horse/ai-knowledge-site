import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${siteConfig.name}`,
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">关于我</h1>

      <div className="prose max-w-none">
        <p>
          你好！欢迎来到 {siteConfig.name}。这是一个专注于 AI
          知识分享的个人博客。
        </p>

        <h2>关于这个网站</h2>
        <p>
          本站致力于用通俗易懂的语言，帮助更多人了解和使用 AI
          技术。无论你是完全的新手还是有经验的开发者，都能在这里找到有价值的内容。
        </p>

        <h2>我的背景</h2>
        <p>
          我是一名 AI 技术爱好者和实践者，专注于 AI 工具应用、Prompt
          工程和内容创作。我相信 AI 技术应该人人可用，而不仅仅是程序员的专利。
        </p>

        <h2>联系我</h2>
        <p>
          如果你有任何问题、建议或合作意向，欢迎通过以下方式联系我：
        </p>
        <ul>
          <li>
            Email：{" "}
            <a href={`mailto:${siteConfig.author.email}`}>
              {siteConfig.author.email}
            </a>
          </li>
          <li>
            GitHub：{" "}
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.author.github}
            </a>
          </li>
          <li>
            Twitter：{" "}
            <a
              href={siteConfig.author.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.author.twitter}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
