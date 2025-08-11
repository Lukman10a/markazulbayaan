import Image from "next/image";
import React, { useState } from "react";
import { DummyData, Testimonial, PostData, FeaturedPost } from "@/lib/types";
import Link from "next/link";
import Testimonials from "@/components/testimonial";
import { getSortedFeaturedPostsData, getSortedPostsData } from "@/cms/utils";
import Pagination from "@/components/pagination";
import DefaultThumbnail from "@/components/defaultThumbnail";
import { formatDate } from "@/lib/utils";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Star, Clock } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

const POSTS_PER_PAGE = 6;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allFeaturedPostData = getSortedFeaturedPostsData().map((post) => ({
    ...post,
  }));

  return {
    props: {
      posts: allPostsData || [],
      featuredPosts: allFeaturedPostData || [],
    },
  };
};

// Dummy CMS data for both Blog and additional sections
const dummyData: DummyData = {
  hero: {
    title:
      "Embark on Your Journey to Master Arabic, Qur'an Recitation, and Writing",
    date: "May 23, 2022",
    author: "Abu Abdullah Ibrahim",
    description:
      "Join our structured programs tailored for beginners looking to excel in Arabic language, Qur'an, reading, and writing. Discover a comprehensive roadmap for your success.",
    buttonText: "Read More",
    image: "/assets/blog1.png",
  },
  aboutUs: {
    title: "We Are a Dedicated Team of Educators Focused on Islamic Learning",
    description:
      "Our mission is to provide accessible and high-quality content to help students excel in the Arabic language, Qur'an recitation, and Islamic studies.",
    buttonText: "Read More",
  },
  ourMission: {
    title: "Empowering Students with Knowledge of Qur'an and Arabic Language",
    description:
      "Our aim is to provide structured, well-crafted courses and resources to help individuals achieve their learning goals.",
  },
  whyWeStarted: {
    title: "Inspired by the Need for Quality Arabic and Qur'an Education",
    description:
      "What started as a simple initiative to help local students quickly turned into a global mission to share knowledge and foster learning.",
    buttonText: "Discover Our Story",
    image: "/assets/blog3.png",
  },
};

const Blog = ({
  posts,
  featuredPosts,
}: {
  posts: PostData[];
  featuredPosts: FeaturedPost[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { theme } = useTheme();

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      {/* Hero Section */}
      <motion.section
        className="relative w-full p-5 lg:p-8 md:p-6 sm:p-4 text-white mb-2 lg:mb-6 md:mb-4 min-h-[60vh] lg:min-h-[50vh] md:min-h-[40vh] flex items-center"
        style={{ backgroundImage: `url(${posts[0]?.thumbnail})` }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4 py-12 lg:py-16 md:py-12 sm:py-8">
          <motion.p 
            className="py-4 lg:py-3 md:py-2 text-xs lg:text-sm md:text-xs mb-4 lg:mb-3 md:mb-2 text-yellow-400 font-semibold tracking-wider"
            variants={itemVariants}
          >
            POSTED ON <span className="font-bold">MARKAZUL - BAYAN</span>
          </motion.p>
          <motion.h1 
            className="text-2xl lg:text-4xl md:text-3xl sm:text-xl font-bold mb-4 lg:mb-6 md:mb-4 capitalize leading-tight max-w-4xl"
            variants={itemVariants}
          >
            {posts[0]?.title}
          </motion.h1>
          <motion.p 
            className="mb-4 lg:mb-6 md:mb-4 text-sm lg:text-lg md:text-base text-gray-300 line-clamp-3 max-w-3xl leading-relaxed"
            variants={itemVariants}
          >
            {posts[0]?.description}
          </motion.p>
          <motion.div 
            className="flex items-center text-xs lg:text-sm md:text-xs mb-4 lg:mb-6 md:mb-4 space-x-4 lg:space-x-6"
            variants={itemVariants}
          >
            <span className="flex items-center text-yellow-400">
              <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
              {posts[0]?.author}
            </span>
            <span className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2 lg:mr-3" />
              {formatDate(posts[0]?.date)}
            </span>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href={`/blog/${posts[0]?.slug}`} passHref>
              <motion.button 
                className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-6 lg:px-8 py-2 lg:py-3 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 lg:space-x-3"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="lg:text-base md:text-sm">Read More</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="py-8 lg:py-12 md:py-10 sm:py-6 container mx-auto px-6 xl:px-8 lg:px-10 md:px-6 sm:px-4">
        {/* Featured Post Section */}
        <motion.section 
          className="mb-12 lg:mb-16 md:mb-12 sm:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`text-2xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-6 lg:mb-8 md:mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            variants={itemVariants}
          >
            Featured Posts
          </motion.h2>
          <div className="grid gap-6 lg:gap-8 md:gap-6 sm:gap-4 grid-cols-3 lg:grid-cols-2 md:grid-cols-1 auto-rows-fr">
            {featuredPosts.map((featuredPost: FeaturedPost, index: number) => (
              <motion.article
                key={index}
                className={`rounded-lg lg:rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl group ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative overflow-hidden">
                  <DefaultThumbnail
                    title={featuredPost.title}
                    imageUrl={featuredPost?.thumbnail}
                    className="w-full h-48 lg:h-52 md:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                    width={undefined}
                  />
                  <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-amber-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold">
                    Featured
                  </div>
                </div>
                <div className="p-3 lg:p-5 md:p-4">
                  <h3 className={`text-lg lg:text-xl md:text-lg font-bold my-2 lg:my-3 md:my-2 group-hover:text-amber-600 transition-colors duration-300 leading-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {featuredPost.title}
                  </h3>
                  <p className={`mb-2 lg:mb-4 md:mb-3 text-sm lg:text-base md:text-sm leading-relaxed line-clamp-3 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {featuredPost.description}
                  </p>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <motion.button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 lg:px-8 py-2 lg:py-3 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-2 lg:space-x-3 text-sm lg:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* All Posts Section */}
        <motion.section 
          className="container mx-auto mb-12 lg:mb-16 md:mb-12 sm:mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className={`text-2xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-6 lg:mb-8 md:mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            variants={itemVariants}
          >
            All Posts
          </motion.h2>
          <div className="grid gap-6 lg:gap-8 md:gap-6 sm:gap-4 grid-cols-3 lg:grid-cols-2 md:grid-cols-1 auto-rows-fr">
            {currentPosts.map((post: PostData, index: number) => (
              <motion.article
                key={index}
                className={`rounded-lg lg:rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-100'
                }`}
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="relative h-48 lg:h-52 md:h-44 overflow-hidden">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 lg:p-8 md:p-6 sm:p-4 grid grid-rows-[auto_1fr_auto] gap-2 lg:gap-3 h-full">
                  <div className={`flex items-center text-sm lg:text-base md:text-sm space-x-4 lg:space-x-6 mb-2 lg:mb-3 ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span className="flex items-center text-amber-600 font-medium">
                      <User className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-xl lg:text-2xl md:text-xl font-bold capitalize mb-2 lg:mb-3 md:mb-2 group-hover:text-amber-600 transition-colors duration-300 leading-tight ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`lg:text-base md:text-sm line-clamp-3 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {post.description}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <motion.button 
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 lg:px-6 py-2 lg:py-3 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 mt-auto flex items-center justify-center space-x-2 lg:space-x-3 text-sm lg:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 lg:mt-12 md:mt-10 sm:mt-6">
            <Pagination
              postsPerPage={POSTS_PER_PAGE}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </motion.section>
      </div>

      {/* About Us and Our Mission Section */}
      <motion.section 
        className={`py-12 lg:py-16 md:py-12 sm:py-8 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700' 
            : 'bg-gradient-to-r from-yellow-50 to-amber-50'
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10 md:gap-8 sm:gap-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm lg:text-base md:text-sm font-semibold mb-2 lg:mb-3 md:mb-2 text-amber-600 uppercase tracking-wider">About Us</h2>
              <p className={`text-2xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4 lg:mb-6 md:mb-4 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {dummyData.aboutUs.title}
              </p>
              <p className={`mb-4 lg:mb-6 md:mb-4 lg:text-lg md:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {dummyData.aboutUs.description}
              </p>
              <Link href="/about" passHref>
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 lg:px-8 py-2 lg:py-3 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 lg:space-x-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="lg:text-base md:text-sm">{dummyData.aboutUs.buttonText}</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h2 className="text-sm lg:text-base md:text-sm font-semibold mb-2 lg:mb-3 md:mb-2 text-amber-600 uppercase tracking-wider">Our Mission</h2>
              <p className={`text-2xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4 lg:mb-6 md:mb-4 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {dummyData.ourMission.title}
              </p>
              <p className={`lg:text-lg md:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {dummyData.ourMission.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why We Started Section */}
      <motion.section 
        className={`py-12 lg:py-16 md:py-12 sm:py-8 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10 md:gap-8 sm:gap-6 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm lg:text-base md:text-sm font-semibold mb-2 lg:mb-3 md:mb-2 text-amber-600 uppercase tracking-wider">Why We Started</h2>
              <p className={`text-2xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-4 lg:mb-6 md:mb-4 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {dummyData.whyWeStarted.title}
              </p>
              <p className={`mb-4 lg:mb-6 md:mb-4 lg:text-lg md:text-base leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {dummyData.whyWeStarted.description}
              </p>
              <Link href="/about" passHref>
                <motion.button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 lg:px-8 py-2 lg:py-3 md:py-2 rounded-lg lg:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 lg:space-x-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="lg:text-base md:text-sm">{dummyData.whyWeStarted.buttonText}</span>
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.button>
              </Link>
            </motion.div>
            <motion.div 
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64 lg:h-80 md:h-64 sm:h-48 rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={dummyData.whyWeStarted.image}
                  alt="Why We Started"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Blog;
