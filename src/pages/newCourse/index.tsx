import { Hero } from "@/components/shared/hero";
import Image, { StaticImageData } from "next/image";
import React from "react";
import arabic_course from "../../../public/assets/arabic_course.png";
import quran_course from "../../../public/assets/quran_course.png";
import tawhid_course from "../../../public/assets/tawhid_course.png";
import tafsir_course from "../../../public/assets/tafsir_course.png";
import fiqh_course from "../../../public/assets/fiqh_course.png";
import tajwid_course from "../../../public/assets/tajwid_course.png";
import { FiBook, FiBookOpen } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { RiGraduationCapFill } from "react-icons/ri";
import { ArrowRight, Clock, Users, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type Course = {
  title: string;
  description: string;
  link: string;
  imageSrc: string | StaticImageData;
  logo: React.ReactNode;
  duration: string;
  students: number;
  rating: number;
  price: string;
};

export default function NewCourse() {
  const courses: Course[] = [
    {
      imageSrc: arabic_course,
      logo: <FiBookOpen />,
      title: "Arabic Language",
      description:
        "Comprehensive Arabic courses for all levels, from beginners to advanced learners.",
      link: "/course/arabic",
      duration: "3 months",
      students: 5,
      rating: 4.8,
      price: "$100/month"
    },
    {
      imageSrc: quran_course,
      logo: <FaBook />,
      title: "Beginner Quranic Studies (Juz Amma)",
      description:
        "In-depth Quranic courses focusing on recitation, memorization, and understanding.",
      link: "/course/quran",
      duration: "6 months",
      students: 10,
      rating: 4.9,
      price: "$120"
    },
    {
      imageSrc: tawhid_course,
      title: "Tawhid (Islamic Monotheism)",
      logo: <FaBook />,
      description:
        "Courses on Islamic theology and monotheism to strengthen your faith and understanding.",
      link: "/course/tawhid",
      duration: "4 months",
      students: 5,
      rating: 4.7,
      price: "$100/month"
    },
    {
      imageSrc: tafsir_course,
      logo: <FaBook />,
      title: "Tafsir",
      description: "Understand the meanings and interpretations of the Quran.",
      link: "/course/tafsir",
      duration: "6 months",
      students: 5,
      rating: 4.6,
      price: "$70/month"
    },
    {
      imageSrc: fiqh_course,
      title: "Fiqh",
      logo: <RiGraduationCapFill />,
      description: "Learn the Islamic jurisprudence that governs daily life.",
      link: "/course/fiqh",
      duration: "8 weeks",
      students: 15,
      rating: 4.5,
      price: "$70/month"
    },
    {
      imageSrc: tajwid_course,
      title: "Tajwid",
      logo: <RiGraduationCapFill />,
      description: "Master the art of Quranic recitation with Tajwid rules.",
      link: "/course/tajwid",
      duration: "4 months",
      students: 120,
      rating: 4.9,
      price: "$50/month"
    },
  ];

  // Animation variants
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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        bgImage={"/assets/course_hero.png"}
        heading={["Our Courses"]}
        description={[
          "Embark on your journey of Islamic knowledge with our comprehensive range of courses.",
          " Whether you're a beginner seeking foundational understanding or an advanced learner",
          " aiming to deepen your knowledge, our courses are designed to cater to all levels. ",
          "Explore topics ranging from Arabic language and Quranic studies to Islamic theology,",
          " jurisprudence, and more. Begin your path to enlightenment today",
        ]}
        buttonText={"Contact Us"}
        buttonLink={"/contact"}
      />
      
      <motion.div 
        className="p-20 xl:p-16 lg:p-12 md:p-8 sm:p-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-12 md:mb-8"
          variants={cardVariants}
        >
          <h2 className="text-4xl lg:text-3xl md:text-2xl font-bold text-gray-900 mb-4 lg:mb-3">
            Available Courses
          </h2>
          <p className="text-xl lg:text-lg md:text-base text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully curated Islamic education programs designed to nurture your spiritual and intellectual growth.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-8 md:gap-6 sm:gap-4">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              className="group bg-white rounded-2xl lg:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={course.imageSrc}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="h-[280px] lg:h-[240px] md:h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                
                {/* Overlay with stats */}
                <div className="absolute top-4 lg:top-3 right-4 lg:right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 lg:px-2 lg:py-1.5">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 lg:h-3 lg:w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm lg:text-xs font-semibold text-gray-900">{course.rating}</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-4 lg:bottom-3 left-4 lg:left-3 bg-yellow-600 text-white rounded-lg px-3 py-1.5 lg:px-2 lg:py-1">
                  <span className="text-sm lg:text-xs font-semibold">{course.price}</span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 lg:p-5 md:p-4">
                {/* Course Icon & Stats */}
                <div className="flex items-start justify-between mb-4 lg:mb-3">
                  <div className="text-2xl lg:text-xl md:text-lg text-yellow-600">
                    {course.logo}
                  </div>
                  <div className="flex items-center space-x-4 lg:space-x-3 md:space-x-2 text-sm lg:text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 lg:h-3 lg:w-3" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 lg:h-3 lg:w-3" />
                      <span>{course.students}+</span>
                    </div>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-2xl lg:text-xl md:text-lg font-bold text-gray-900 mb-3 lg:mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {course.title}
                </h3>

                {/* Course Description */}
                <p className="text-gray-600 lg:text-sm md:text-xs leading-relaxed mb-6 lg:mb-5 md:mb-4">
                  {course.description}
                </p>

                {/* CTA Button */}
                <Link href={course.link}>
                  <motion.button
                    className="group/btn w-full bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-semibold py-3 lg:py-2.5 md:py-2 px-6 lg:px-5 md:px-4 rounded-xl lg:rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span className="lg:text-sm md:text-xs">Explore Course Details</span>
                    <motion.div variants={arrowVariants}>
                      <ArrowRight className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3" />
                    </motion.div>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16 lg:mt-12 md:mt-8 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl lg:rounded-xl p-8 lg:p-6 md:p-4 border border-yellow-100"
          variants={cardVariants}
        >
          <h3 className="text-2xl lg:text-xl md:text-lg font-bold text-gray-900 mb-4 lg:mb-3">
            Ready to Begin Your Islamic Education Journey?
          </h3>
          <p className="text-gray-600 lg:text-sm md:text-xs mb-6 lg:mb-4 max-w-2xl mx-auto">
            Join hundreds of students worldwide in authentic Islamic learning. Contact us to discuss which course is right for you.
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 lg:py-2.5 md:py-2 px-8 lg:px-6 md:px-4 rounded-xl lg:rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="lg:text-sm md:text-xs">Start Your Journey Today</span>
              <ArrowRight className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
