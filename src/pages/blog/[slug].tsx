// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import OtherBlogs from '../../components/otherPost';
import { getPostData, getAllPostIds } from "@/cms/utils"; // Import the utility functions




export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // This will show a 404 for paths not returned by getStaticPaths
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params?.slug as string);

  return {
    props: {
      post: postData,
    },
  };
};


// Define types for the blog post data
interface Post {
  title: string;
  author: string;
  date: string;
  description: string;
  content: string;
  image: string;
  slug: string;
}

// Props type
interface BlogPostProps {
  post: Post;
}

// Blog Post Page Component
const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const router = useRouter();

  // Check if the page is in fallback mode (for ISR/SSG)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <header className="mb-8 flex items-center justify-center flex-col">
        <div className='w-2/3 md:px-5'>
          <p className="text-sm mb-2">
            <span className="font-bold text-lg text-amber-900">{post.author}</span>
          </p>
          <p className='text-xs mb:5 md:mb-0'>Posted on {post.date}</p>
          <h1 className="xs:text-sm sm:text-lg md:text-4xl text-neutral-800 font-bold mb-7 md:mb-4 md:mx-auto md:py-4">{post.title}</h1>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg mb-8">
          <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
        </div>
       
      </header>

      {/* Blog Content */}
      <section className="prose max-w-full mb-8">
        <p>{post.content}</p> {/* Render HTML or markdown content */}
      </section>

      {/* other blogs */}
      <OtherBlogs />
    </article>
  );
};


export default BlogPost;
