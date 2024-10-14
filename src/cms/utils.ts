import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostData, FeaturedPost } from "../lib/types";

// Define the directories for posts and featured posts
const postsDirectory = path.join(process.cwd(), "public/_posts");
const featuredPostsDirectory = path.join(process.cwd(), "public/_featured");

// Function to get sorted regular posts data
export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
      date: data.date instanceof Date ? data.date.toISOString() : null,
    } as PostData;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Function to get all post IDs for dynamic routing
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""), // Removing .md extension
    },
  }));
}

// Function to get individual post data
export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
    date:
      matterResult.data.date instanceof Date
        ? new Date(matterResult.data.date).toISOString()
        : null,
    body: matterResult.content,
  } as PostData;
}

// *** New functions for featured posts ***

// Function to get sorted featured posts data
export function getSortedFeaturedPostsData(): FeaturedPost[] {
  const fileNames = fs.readdirSync(featuredPostsDirectory);
  const allFeaturedPostsData: FeaturedPost[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(featuredPostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...data,
      date: data.date instanceof Date ? data.date.toISOString() : null,
    } as FeaturedPost;
  });

  return allFeaturedPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Function to get all featured post IDs for dynamic routing
export function getAllFeaturedPostIds() {
  const fileNames = fs.readdirSync(featuredPostsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""), // Removing .md extension
    },
  }));
}

// Function to get individual featured post data
export function getFeaturedPostData(slug: string): FeaturedPost {
  const fullPath = path.join(featuredPostsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
    date:
      matterResult.data.date instanceof Date
        ? new Date(matterResult.data.date).toISOString()
        : null,
    body: matterResult.content,
  } as FeaturedPost;
}
