import Image from "next/image";
import React, { useState } from "react";
import { DummyData, Testimonial, PostData, FeaturedPost } from "@/lib/types";
import Link from "next/link";
import Testimonials from "@/components/testimonial";
import { getSortedFeaturedPostsData, getSortedPostsData } from "@/cms/utils";
import Pagination from "@/components/pagination";
import DefaultThumbnail from "@/components/defaultThumbnail";
import { formatDate } from "@/lib/utils";

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

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="">
      {/* Hero Section */}
      <section
        className="relative w-full p-5 md:p-10 text-white mb-2 md:mb-8"
        style={{ backgroundImage: `url(${posts[0].thumbnail})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-24">
          <p className="py-4 text-xs md:text-sm">
            POSTED ON <span className="font-bold">MARKAZUL - BAYAN</span>
          </p>
          <h1 className="text-2xl md:text-5xl font-bold mb-4 capitalize">
            {posts[0].title}
          </h1>
          <p className="mb-4 text-sm md:text-lg text-gray-300 line-clamp-3">
            {posts[0]?.description}
          </p>
          <p className="text-xs md:text-sm mb-4">
            By <span className="text-yellow-500">{posts[0].author} </span> |{" "}
            {formatDate(posts[0].date)}
          </p>
          <Link href={`/blog/${posts[0].slug}`} passHref>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
              Read More
            </button>
          </Link>
        </div>
      </section>

      <div className="py-8 container mx-auto px-6">
        {/* Featured Post Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {featuredPosts.map((featuredPost: FeaturedPost, index: number) => (
              <article
                key={index}
                className="rounded-lg overflow-hidden border border-amber-500 grid grid-rows-[auto_1fr_auto] p-3"
              >
                <DefaultThumbnail
                  title={featuredPost.title}
                  imageUrl={featuredPost?.thumbnail}
                  className="w-full"
                  width={undefined}
                />
                <h3 className="text-lg font-bold my-2">{featuredPost.title}</h3>
                <div className="">
                  <p className="text-gray-600 mb-2">
                    {featuredPost.description}
                  </p>
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All Posts Section */}
        <section className="container mx-auto ">
          <h2 className="text-2xl font-bold mb-6">All Posts</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {currentPosts.map((post: PostData, index: number) => (
              <article
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 grid grid-rows-[auto_1fr_auto]"
              >
                <div className="relative h-48">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 grid grid-rows-[auto_1fr_auto] gap-2">
                  <p className="text-sm">
                    By<span className="text-[#760808]"> {post.author}</span> |{" "}
                    <span>{formatDate(post.date)}</span>
                  </p>

                  <div>
                    <h3 className="text-xl font-bold capitalize mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <Link href={`/blog/${post.slug}`} passHref>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition mt-auto">
                      Read More
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Pagination
            postsPerPage={POSTS_PER_PAGE}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </section>
      </div>

      {/* About Us and Our Mission Section */}
      <section className="bg-yellow-50 py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-semibold mb-2">About Us</h2>
              <p className="text-2xl font-bold mb-4">
                {dummyData.aboutUs.title}
              </p>
              <p className="text-gray-600 mb-4">
                {dummyData.aboutUs.description}
              </p>
              <Link href="/about" passHref>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                  {dummyData.aboutUs.buttonText}
                </button>
              </Link>
            </div>
            <div>
              <h2 className="text-sm font-semibold mb-2">Our Mission</h2>
              <p className="text-2xl font-bold mb-4">
                {dummyData.ourMission.title}
              </p>
              <p className="text-gray-600">
                {dummyData.ourMission.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="relative w-full md:w-2/3 h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={dummyData.whyWeStarted.image}
                alt="Why We Started"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-2xl font-bold mb-4">Why We Started</h2>
              <p className="text-xl text-gray-700 mb-4">
                {dummyData.whyWeStarted.title}
              </p>
              <p className="mb-6">{dummyData.whyWeStarted.description}</p>
              <Link href="/about" passHref>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                  {dummyData.whyWeStarted.buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
    </main>
  );
};

export default Blog;
