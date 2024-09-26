// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import OtherBlogs from './otherPost';

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

// Fetch all possible slugs for Static Generation (SSG)
export const getStaticPaths: GetStaticPaths = async () => {
  // Replace this with your data fetching logic (API, CMS, database, etc.)
  const posts = [
    { slug: 'road-map-for-beginners-in-arabic-language-quran-reading-and-writing' },
    { slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit' },
    { slug: '8-figma-design-systems-that-you-can-download-for-free-today' },
  ];

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for ISR (Incremental Static Regeneration)
  };
};

// Fetch post data based on slug for Static Generation (SSG)
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  // Replace this with your data fetching logic
  const posts = [
    {
      slug: 'road-map-for-beginners-in-arabic-language-quran-reading-and-writing',
      title: "Road map for beginners in Arabic language, Qur'an, Reading and writing",
      author: 'Abu Abdullah',
      date: 'September 23, 2022',
      description: 'This is the first post description.',
      content: 'Full content of the first post.',
      image: '/assets/blog1.png',
    },
    {
      slug: 'lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit',
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      author: 'Abu Zayda',
      date: 'October 5, 2022',
      description: 'This is the second post description.',
      content: 'Full content of the second post.',
      image: '/assets/blog2.png',
    },
    {
      slug: '8-figma-design-systems-that-you-can-download-for-free-today',
      title: "8 Figma design systems that you can download for free today.",
      author: 'Abu Jamal',
      date: 'November 12, 2022',
      description: 'This is the third post description.',
      content: 'Full content of the third post.',
      image: '/assets/blog3.png',
    },
  ];

  // Find the post by slug
  const post = posts.find((p) => p.slug === slug);

  // If the post is not found, return 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10, // Enable ISR, regenerate the page every 10 seconds if a new request comes in
  };
};

export default BlogPost;
