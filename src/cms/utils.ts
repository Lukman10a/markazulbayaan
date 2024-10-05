// import fs from "fs";
// import matter from "gray-matter";
// import path from "path";
// // import yaml from "js-yaml";

// const postsDirectory = path.join(process.cwd(), "public/_posts");

// export type PostContent = {
//   readonly date: string;
//   readonly title: string;
//   readonly slug: string;
//   readonly fullPath: string;
// };

// let postCache: PostContent[];

// export function fetchPostContent(): PostContent[] {
//   if (postCache) {
//     return postCache;
//   }
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);

//   const allPostsData = fileNames
//     .filter((it) => it.endsWith(".md"))
//     .map((fileName) => {
//       // Read markdown file as string
//       const fullPath = path.join(postsDirectory, fileName);
//       const fileContents = fs.readFileSync(fullPath, "utf8");

//       // Use gray-matter to parse the post metadata section
//       const matterResult = matter(fileContents, {
//         engines: {
//           yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
//         },
//       });
//       const matterData = matterResult.data as {
//         date: string;
//         title: string;
//         slug: string;
//         fullPath: string;
//       };
//       matterData.fullPath = fullPath;

//       const slug = fileName.replace(/\.md$/, "");

//       // Validate slug string
//       if (matterData.slug !== slug) {
//         throw new Error(
//           "slug field not match with the path of its content source"
//         );
//       }

//       return matterData;
//     });
//   // Sort posts by date
//   postCache = allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
//   return postCache;
// }

// export function countPosts(tag?: string): number {
//   return fetchPostContent().filter(
//     (it) => !tag || (it.tags && it.tags.includes(tag))
//   ).length;
// }

// export function listPostContent(
//   page: number,
//   limit: number,
//   tag?: string
// ): PostContent[] {
//   return fetchPostContent()
//     .filter((it) => !tag || (it.tags && it.tags.includes(tag)))
//     .slice((page - 1) * limit, page * limit);
// }

// // src/libs/utils.ts

// export const getFolderMarkups = (
//   directory: string
// ): matter.GrayMatterFile<string>[] | null => {
//   /* Converts all files in a directory to gray-matter objects */
//   try {
//     const directoryPath = path.join(process.cwd(), directory);
//     const files = fs.readdirSync(directoryPath);

//     return files.map((filename) => {
//       const filePath = path.join(directoryPath, filename);
//       const data = matter.read(filePath);
//       return data;
//     });
//   } catch (error) {
//     return null;
//   }
// };

// export const getMarkup = (
//   directory: string,
//   filename: string
// ): matter.GrayMatterFile<string> | null => {
//   /* Converts specific file to a gray-matter object */
//   try {
//     const file = matter.read(path.join(process.cwd(), directory, filename));
//     return file;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };