import { getAllPostIds, getPostData } from "@/lib/getMarkdownData";
import { PostData } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const PostPage = ({ post }: { post: PostData }) => {
  console.log({ post });

  return (
    <div className="prose p-7 max-w-prose">
      <h1>{post.title}</h1> {/* Use title for the heading */}
      <p>{formatDate(post.date)}</p> {/* Display the formatted date */}
      <Markdown remarkPlugins={[remarkGfm]}>{post.body}</Markdown>
    </div>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log({ paths });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = getPostData(params.slug); // Ensure you're using the correct param

  console.log({ postData, params });

  return {
    props: {
      post: postData,
    },
  };
}
