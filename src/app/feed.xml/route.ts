import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/constants";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = siteConfig.url;

  const items = posts
    .map(
      (post) => `
    <entry>
      <title>${escapeXml(post.title)}</title>
      <link href="${baseUrl}/blog/${post.slug}"/>
      <id>${baseUrl}/blog/${post.slug}</id>
      <published>${new Date(post.date).toISOString()}</published>
      <summary>${escapeXml(post.description)}</summary>
      ${post.tags.map((tag) => `<category term="${escapeXml(tag)}"/>`).join("\n      ")}
    </entry>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(siteConfig.name)}</title>
  <subtitle>${escapeXml(siteConfig.description)}</subtitle>
  <link href="${baseUrl}/feed.xml" rel="self"/>
  <link href="${baseUrl}"/>
  <updated>${new Date().toISOString()}</updated>
  <author>
    <name>${escapeXml(siteConfig.author.name)}</name>
  </author>
  <id>${baseUrl}/</id>
  ${items}
</feed>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
    },
  });
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
