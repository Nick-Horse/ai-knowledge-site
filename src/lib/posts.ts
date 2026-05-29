import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image?: string;
  content: string;
}

export function getAllPosts(): Omit<BlogPost, "content">[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(blogDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags ?? [],
        description: data.description ?? "",
        image: data.image ?? undefined,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    date: data.date,
    tags: data.tags ?? [],
    description: data.description ?? "",
    image: data.image ?? undefined,
    content,
  };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getPostsByTag(tag: string): Omit<BlogPost, "content">[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

// Projects
const projectsDir = path.join(process.cwd(), "content", "projects");

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
  content: string;
}

export function getAllProjects(): Omit<Project, "content">[] {
  if (!fs.existsSync(projectsDir)) return [];

  const files = fs.readdirSync(projectsDir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(projectsDir, f), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title,
        description: data.description ?? "",
        tags: data.tags ?? [],
        link: data.link ?? undefined,
        image: data.image ?? undefined,
      };
    });
}
