import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export const getStaticProps = async () => {
  const postsDirectory = path.join(process.cwd(), "public/_posts");
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    // Convert date to string format (e.g., ISO string)
    const date =
      data.date instanceof Date ? data.date.toISOString() : data.date;

    return {
      fileName,
      ...data,
      date, // Include the stringified date
    };
  });

  return {
    props: {
      posts: allPostsData,
    },
  };
};

const HomePage = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      {posts.map((post) => (
        <div key={post.fileName}>
          <h2>{post.title}</h2>
          <p>{post.date}</p>
          <Link href={`/posts/${post.fileName}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
