import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { PostData } from "./types"; // Import your type

const postsDirectory = path.join(process.cwd(), "public/_posts");

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    // Ensure data matches the PostData type
    return {
      slug,
      ...data,
      date: data.date instanceof Date ? data.date.toISOString() : data.date, // Ensure date is a string
    } as PostData; // Type assertion
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ""), // Corrected to 'slug'
    },
  }));
}

export function getPostData(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Combine the data with the slug
  return {
    slug,
    ...matterResult.data,
    date:
      matterResult.data.date instanceof Date
        ? new Date(matterResult.data.date).toISOString()
        : matterResult.data.date,
    body: matterResult.content,
  } as PostData; // Type assertion
}
