// pages/posts/[slug].tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "public/_posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") }, // Removing .md extension
  }));

  return {
    paths,
    fallback: false, // This will show a 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps = async ({ params }) => {
  const postsDirectory = path.join(process.cwd(), "public/_posts");
  const fullPath = path.join(postsDirectory, `${params.slug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  console.log({ data });

  return {
    props: {
      post: {
        content,
        ...data,
      },
    },
  };
};

const PostPage = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default PostPage;
