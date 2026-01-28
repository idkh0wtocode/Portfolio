import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Helper to get the correct base path for assets
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
}

// Helper to prefix paths with basePath
export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path; // Don't modify external URLs
  }
  const basePath = getBasePath();
  return path.startsWith('/') ? `${basePath}${path}` : path;
}

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image ? withBasePath(data.image) : "",
    images: data.images ? data.images.map((img: string) => withBasePath(img)) : [],
    tag: data.tag || [],
    team: data.team ? data.team.map((member: Team) => ({
      ...member,
      avatar: withBasePath(member.avatar)
    })) : [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""]) {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir);
}
