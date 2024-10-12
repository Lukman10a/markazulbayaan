import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import OtherBlogs from "../../components/otherPost";
import {
  getPostData,
  getAllPostIds,
  getAllFeaturedPostIds,
  getFeaturedPostData,
} from "@/cms/utils";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import { User } from "lucide-react";

export async function getStaticPaths() {
  // Combine paths from both regular posts and featured posts
  const postPaths = getAllPostIds();
  const featuredPaths = getAllFeaturedPostIds();

  // Merge the paths arrays
  const paths = [...postPaths, ...featuredPaths];

  return {
    paths,
    fallback: false, // You can set fallback to true if you need ISR
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Try to get regular post data
  const postData = getPostData(params.slug);

  // If no regular post found, try to get featured post data
  const featuredPostData = !postData ? getFeaturedPostData(params.slug) : null;

  // Ensure either post or featured post exists
  if (!postData && !featuredPostData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: postData || null,
      featuredPost: featuredPostData || null,
    },
  };
}

// Define types for the blog post data
interface Post {
  title: string;
  author: string;
  date: string;
  description: string;
  body: string;
  thumbnail: string;
  slug: string;
}

interface FeaturedPost {
  title: string;
  author: string;
  date: string;
  description: string;
  body: string;
  thumbnail: string;
  slug: string;
}

// Props type
interface BlogPostProps {
  post: Post | null;
  featuredPost: FeaturedPost | null;
}

// Blog Post Page Component
const BlogPost: React.FC<BlogPostProps> = ({ post, featuredPost }) => {
  const router = useRouter();

  // Check if the page is in fallback mode (for ISR/SSG)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  // Use the post or featured post data, whichever exists
  const currentPost = post || featuredPost;

  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="mb-8 flex items-center justify-center flex-col">
        <div className="w-2/3 md:px-5">
          <div className="flex gap-2">
            <User />
            <div>
              <p className="text-sm mb-1 flex">
                <span className="font-bold text-lg text-amber-900">
                  {currentPost.author}
                </span>
              </p>
              <p className="text-xs  text-[#6D6E76] mb-5 md:mb-0">
                Posted on {formatDate(currentPost.date)}
              </p>
            </div>
          </div>

          <h1 className="capitalize xs:text-sm sm:text-lg md:text-4xl text-neutral-800 font-bold mb-7 md:mb-4 md:mx-auto md:py-4">
            {currentPost.title}
          </h1>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={currentPost.thumbnail}
            alt={currentPost.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </header>

      {/* Blog Content */}
      <section className="prose max-w-full mb-8">
        <Markdown remarkPlugins={[remarkGfm]}>{currentPost.body}</Markdown>
      </section>

      {/* other blogs */}
      <OtherBlogs />
    </article>
  );
};

export default BlogPost;
