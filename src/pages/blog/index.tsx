import Image from "next/image";
import React, { useEffect, useState } from "react";
import blog2 from "/public/assets/blog2.png";

import { DummyData, Testimonial } from "@/lib/types";
import Loader from "@/components/Loader";
import Link from "next/link";
import Testimonials from "@/components/testimonial";
import { getSortedPostsData } from "@/cms/utils"; // Import the utility function


export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      posts: allPostsData,
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
  featuredPost: {
    title: "The Key to Mastering Arabic Grammar: A Comprehensive Guide",
    author: "Abu Lubaba Al-Asalafy",
    date: "June 10, 2022",
    description:
      "Master the intricacies of Arabic grammar with this step-by-step guide designed for learners of all levels.",
    image: blog2,
  },
  allPosts: [
    {
      title: "5 Essential Tips to Improve Your Qur'an Recitation",
      author: "Abu Zayda Al-Muwaffaq",
      description:
        "Looking to memorize the Qur'an? Follow these proven techniques for quick and effective memorization.",
      date: "Aug 10, 2023",
    },
    {
      title: "How to Develop Fluency in Spoken Arabic in 6 Months",
      author: "Abu Tohir As-Salafy",
      description:
        "Start reading Arabic with ease by following these simple steps, designed for absolute beginners.",
      date: "Sept 1, 2023",
    },
    {
      title:
        "The Importance of Writing Skills in Arabic for Effective Communication",
      author: "Abu Qoseem Al-Ilorly",
      description:
        "Looking to memorize the Qur'an? Follow these proven techniques for quick and effective memorization.",
      date: "Oct 12, 2021",
    },
    {
      title: "Understanding Tajweed: A Complete Guide for Beginners",
      author: "Abu Hanifa Ibrahim",
      description:
        "Master the art of Tajweed and improve your Qur'an recitation with this detailed overview of essential rules.",
      date: "Nov 20, 2021",
    },
  ],
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

const Blog: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Simulate fetching data from CMS
    setTimeout(() => {
      setData(dummyData);
    }, 1000);
  }, []);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  if (!data) {
    return <Loader />;
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative w-full p-5 md:p-10 text-white mb-2 md:mb-8 "
        style={{ backgroundImage: `url(${data.hero.image})` }}
      >
        <div className="absolute inset-0 bg-cover bg-center"></div>
        <div className="relative z-10 md:mx-auto md:px-4 md:py-24 md:container">
          <p className="py-4 text-xs md:text-sm">
            POSTED ON <span className="font-bold">MARKAZUL - BAYAN </span>
          </p>
          <h1 className="text-lg md:text-5xl font-bold mb-4">
            {data.hero.title}
          </h1>
          <p className="mb-4 text-sm md:text-lg">{data.hero.description}</p>

          <p className="text-xs md:text-sm mb-4">
            By <span className="text-yellow-500">{data.hero.author} </span> |{" "}
            {data.hero.date}
          </p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            {data.hero.buttonText}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 mb-8 mx-auto px-4 py-8 container">
        {/* Featured Post Section */}
        <section className=" mx-auto px-4 py-8 container">
          <h2 className="text-xl font-bold mb-4">Featured Post</h2>
          <div className=" rounded-lg overflow-hidden shadow-lg">
            <Image
              src={data.featuredPost.image}
              alt={data.featuredPost.title}
              className="w-full h-54 object-cover"
            />
            <div className="p-6 py-8">
              <p className=" text-xs mb-4">
                By{" "}
                <span className="text-amber-900 font-bold">
                  {data.featuredPost.author}
                </span>{" "}
                | {data.featuredPost.date}
              </p>
              <h3 className="text-lg font-bold mb-2">
                {data.featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-2">
                {data.featuredPost.description}
              </p>
              <Link href={`/blog/${createSlug(data.featuredPost.title)}`}>
                <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* All Posts Section */}
        <section className="mx-auto px-4 py-8 container">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">All Posts</h2>
            <a href="#" className="text-yellow-500">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {data.allPosts.map((post: any, index: number) => (
              <div
                key={index}
                className="hover:bg-yellow-50 cursor-pointer p-6 rounded-lg shadow-lg"
              >
                <p className="text-xs text-gray-600 mb-2">
                  By{" "}
                  <span className="text-amber-900 font-bold">
                    {post.author}{" "}
                  </span>{" "}
                  | <span>{post.date}</span>
                </p>
                <h3 className="text-sm font-bold mb-2">{post.title}</h3>

                <p className="text-sm text-gray-500">{post.description}</p>

                <Link
                  href={`/blog/${createSlug(post.title)}`}
                  className="text-yellow-500"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bg-yellow-50">
        {/* About Us and Our Mission Section */}
        <section className="grid md:grid-cols-2 gap-6 mb-8 bg-yellow-50 mx-auto px-4 py-8 container">
          {/* About Us */}
          <div className=" p-6 rounded-lg">
            <h2 className="text-sm font-semibold mb-4">About Us</h2>
            <p className="text-2xl font-bold mb-4">{data.aboutUs.title}</p>
            <p className="text-gray-600 mb-4">{data.aboutUs.description}</p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
              {data.aboutUs.buttonText}
            </button>
          </div>
          {/* Our Mission */}
          <div className=" p-6 rounded-lg  mx-auto px-4 py-8 container">
            <h2 className="text-sm font-semibold mb-4">Our Mission</h2>
            <p className="text-2xl font-bold mb-4">{data.ourMission.title}</p>
            <p className="text-gray-600">{data.ourMission.description}</p>
          </div>
        </section>
      </div>

      <div className="flex justify-center mx-auto">
        {/* Why We Started Section */}
        <section className="relative mb-16 mx-auto pl-6 py-8 container">
          <div className="relative grid  items-center">
            {/* Image */}
            <div className="relative w-2/3 md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                  backgroundImage: `url(${data.whyWeStarted.image})`,
                }}
              ></div>
            </div>
            {/* Text Content */}
            <div className="min-w-[150px] absolute md:-translate-x-1/2 translate-x-12 translate-y-16 md:right-0 md:top-1/2 transform md:-translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-1/2 md:w-3/5 lg:w-2/5">
              <h2 className="text-xs md:text-2xl font-bold mb-4">
                Why We Started
              </h2>
              <p className="text-xs md:text-xl text-gray-700 mb-4">
                {data.whyWeStarted.title}
              </p>
              <p className="mb-6 text-xs md:text-lg">
                {data.whyWeStarted.description}
              </p>
              <Link
                href={"/about"}
                className="bg-yellow-500 text-white md:px-6 text-xs md:text-lg px-2 py-1 md:py-3 rounded-lg hover:bg-yellow-600 transition"
              >
                {data.whyWeStarted.buttonText}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Testimonials />
    </main>
  );
};

export default Blog;
