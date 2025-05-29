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
import { User, Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export async function getStaticPaths() {
  const postPaths = getAllPostIds();
  const featuredPaths = getAllFeaturedPostIds();
  const paths = [...postPaths, ...featuredPaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postData = getPostData(params.slug);
  const featuredPostData = !postData ? getFeaturedPostData(params.slug) : null;

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

interface BlogPostProps {
  post: Post | null;
  featuredPost: FeaturedPost | null;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, featuredPost }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  const currentPost = post || featuredPost;

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 py-16 xl:py-20 lg:py-16 md:py-12 sm:py-8">
          {/* Back Button */}
          <motion.div 
            className="mb-8 lg:mb-6 md:mb-4"
            variants={itemVariants}
          >
            <Link href="/blog">
              <motion.button 
                className="flex items-center space-x-2 lg:space-x-3 text-yellow-400 hover:text-yellow-300 transition-colors font-medium text-sm lg:text-base"
                whileHover={{ x: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-4 w-4 lg:h-5 lg:w-5" />
                <span>Back to Blog</span>
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-12 lg:gap-8 md:gap-6 items-center">
            {/* Content */}
            <div className="col-span-2 lg:col-span-1">
              {/* Author Info */}
              <motion.div 
                className="flex items-center space-x-4 lg:space-x-3 md:space-x-2 mb-6 lg:mb-4 md:mb-3"
                variants={itemVariants}
              >
                <div className="w-12 h-12 lg:w-10 lg:h-10 md:w-8 md:h-8 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg lg:text-base md:text-sm">
                  {currentPost.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-yellow-400 text-lg lg:text-base md:text-sm">
                    {currentPost.author}
                  </p>
                  <div className="flex items-center space-x-4 lg:space-x-3 md:space-x-2 text-gray-300 text-sm lg:text-xs">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4 lg:h-3 lg:w-3" />
                      <span>{formatDate(currentPost.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 lg:h-3 lg:w-3" />
                      <span>5 min read</span>
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl font-bold leading-tight mb-6 lg:mb-4 md:mb-3"
                variants={itemVariants}
              >
                {currentPost.title}
              </motion.h1>

              {/* Description */}
              <motion.p 
                className="text-xl lg:text-lg md:text-base sm:text-sm text-gray-300 leading-relaxed mb-8 lg:mb-6 md:mb-4"
                variants={itemVariants}
              >
                {currentPost.description}
              </motion.p>

              {/* Action Buttons */}
              <motion.div 
                className="flex items-center space-x-4 lg:space-x-3 md:space-x-2"
                variants={itemVariants}
              >
                <motion.button 
                  className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 lg:px-5 md:px-4 py-3 lg:py-2.5 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
                  <span className="lg:text-sm md:text-xs">Share</span>
                </motion.button>
                <motion.button 
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 lg:px-5 md:px-4 py-3 lg:py-2.5 md:py-2 rounded-lg lg:rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark className="h-4 w-4 lg:h-3.5 lg:w-3.5" />
                  <span className="lg:text-sm md:text-xs">Save</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Featured Image */}
            <div className="col-span-1 lg:col-span-1 lg:order-first">
              <motion.div 
                className="relative h-80 xl:h-96 lg:h-64 md:h-52 sm:h-40 rounded-2xl lg:rounded-xl overflow-hidden shadow-2xl group"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={currentPost.thumbnail}
                  alt={currentPost.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section 
        className="relative"
        variants={itemVariants}
      >
        <div className="max-w-4xl mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 py-16 xl:py-20 lg:py-16 md:py-12 sm:py-8">
          <div className="grid grid-cols-4 lg:grid-cols-1 gap-12 lg:gap-8 md:gap-6">
            {/* Main Content */}
            <div className="col-span-3 lg:col-span-1">
              <motion.article 
                className="bg-white rounded-2xl lg:rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                variants={itemVariants}
              >
                <div className="p-8 xl:p-10 lg:p-6 md:p-5 sm:p-4">
                  <div className="prose prose-lg lg:prose-base md:prose-sm max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h1:text-3xl lg:prose-h1:text-2xl md:prose-h1:text-xl
                    prose-h2:text-2xl lg:prose-h2:text-xl md:prose-h2:text-lg
                    prose-h3:text-xl lg:prose-h3:text-lg md:prose-h3:text-base
                    prose-p:text-gray-700 prose-p:leading-relaxed lg:prose-p:text-sm md:prose-p:text-xs
                    prose-a:text-yellow-600 prose-a:no-underline hover:prose-a:text-yellow-700
                    prose-strong:text-gray-900 prose-strong:font-semibold
                    prose-blockquote:border-l-4 prose-blockquote:border-yellow-500 prose-blockquote:bg-yellow-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                    prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                    prose-pre:bg-gray-900 prose-pre:text-gray-100
                    prose-ul:space-y-2 prose-ol:space-y-2
                    prose-li:text-gray-700 lg:prose-li:text-sm md:prose-li:text-xs
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:mx-auto
                  ">
                    <Markdown remarkPlugins={[remarkGfm]}>{currentPost.body}</Markdown>
                  </div>
                </div>
              </motion.article>

              {/* Tags */}
              <motion.div 
                className="mt-8 lg:mt-6 md:mt-4"
                variants={itemVariants}
              >
                <div className="flex flex-wrap gap-2 lg:gap-1.5">
                  {['Islamic Studies', 'Arabic Language', 'Quran', 'Education'].map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-yellow-100 text-yellow-800 px-3 lg:px-2 py-1 lg:py-0.5 rounded-full text-sm lg:text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="col-span-1 lg:col-span-1 lg:order-first">
              <div className="sticky top-6 lg:static space-y-6 lg:space-y-4 md:space-y-3">
                {/* Article Stats */}
                <motion.div 
                  className="bg-white rounded-xl lg:rounded-lg shadow-lg border border-gray-100 p-6 lg:p-5 md:p-4"
                  variants={itemVariants}
                >
                  <h3 className="font-bold text-gray-900 mb-4 lg:mb-3 md:mb-2 text-lg lg:text-base md:text-sm">Article Info</h3>
                  <div className="space-y-3 lg:space-y-2">
                    <div className="flex items-center justify-between text-sm lg:text-xs">
                      <span className="text-gray-600">Published</span>
                      <span className="font-medium text-gray-900">{formatDate(currentPost.date)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm lg:text-xs">
                      <span className="text-gray-600">Reading time</span>
                      <span className="font-medium text-gray-900">5 min read</span>
                    </div>
                    <div className="flex items-center justify-between text-sm lg:text-xs">
                      <span className="text-gray-600">Views</span>
                      <span className="font-medium text-gray-900">1.2k</span>
                    </div>
                  </div>
                </motion.div>

                {/* Share */}
                <motion.div 
                  className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl lg:rounded-lg border border-yellow-200 p-6 lg:p-5 md:p-4"
                  variants={itemVariants}
                >
                  <h3 className="font-bold text-yellow-800 mb-4 lg:mb-3 md:mb-2 text-lg lg:text-base md:text-sm">Share this article</h3>
                  <p className="text-yellow-700 text-sm lg:text-xs mb-4 lg:mb-3 md:mb-2">
                    Help spread knowledge by sharing this article with others.
                  </p>
                  <motion.button 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 lg:py-2.5 md:py-2 rounded-lg lg:rounded-xl transition-colors text-sm lg:text-xs"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Share Article
                  </motion.button>
                </motion.div>

                {/* Back to Blog */}
                <motion.div 
                  className="bg-white rounded-xl lg:rounded-lg shadow-lg border border-gray-100 p-6 lg:p-5 md:p-4"
                  variants={itemVariants}
                >
                  <h3 className="font-bold text-gray-900 mb-4 lg:mb-3 md:mb-2 text-lg lg:text-base md:text-sm">Continue Reading</h3>
                  <p className="text-gray-600 text-sm lg:text-xs mb-4 lg:mb-3 md:mb-2">
                    Explore more articles about Islamic education and Arabic language learning.
                  </p>
                  <Link href="/blog">
                    <motion.button 
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 lg:py-2.5 md:py-2 rounded-lg lg:rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm lg:text-xs"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowLeft className="h-4 w-4 lg:h-3 lg:w-3" />
                      <span>All Articles</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BlogPost;
