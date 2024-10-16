import { BookOpen } from "lucide-react";
import React from "react";
import { LiaQuranSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa6";
import { BsHandIndex } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"; // Importing the arrow icon

export default function CoursePage() {
  const courses = [
    {
      slug: "/arabic",
      title: "Arabic Language",
      description:
        "Comprehensive Arabic courses for all levels, from beginners to advanced learners.",
      icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      slug: "/quran",
      title: "Quranic Studies",
      description:
        "In-depth Quranic courses focusing on recitation, memorization, and understanding.",
      icon: (
        <LiaQuranSolid className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
      ),
    },
    {
      slug: "/tawhid",
      title: "Tawhid (Islamic Monotheism)",
      description:
        "Courses on Islamic theology and monotheism to strengthen your faith and understanding.",
      icon: <BsHandIndex className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      slug: "/tajwid",
      title: "Tajwid",
      description: "Master the rules of Tajwid for perfect Quranic recitation.",
      icon: <FaBook className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      slug: "/fiqh",
      title: "Fiqh",
      description: "Learn the Islamic jurisprudence that governs daily life.",
      icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      slug: "/tafsir",
      title: "Tafsir",
      description: "Understand the meanings and interpretations of the Quran.",
      icon: <FaBook className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
  ];

  // Animation Variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger the appearance of each card
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.05, // Slightly zoom the card on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  // Animation variants for the button
  const buttonVariants = {
    hover: {
      scale: 1.1, // Slight scale-up on hover
      backgroundColor: "#FFD700", // Change background color on hover
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95, // Scale down on tap to simulate press effect
    },
  };

  // Animation for the arrow
  const arrowVariants = {
    hover: {
      x: 10, // Move arrow to the right on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <section className="py-16 bg-yellow-50 my-10">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold mb-12 text-center">
          Available Courses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:bg-yellow-100 hover:text-black"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass index to stagger animations
              whileHover="hover"
            >
              <Link
                href={{
                  pathname: `/course/${course.slug}`,
                  query: {
                    title: course.title,
                    description: course.description,
                  },
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }} // Rotate icon slightly on hover
                  className="icon"
                >
                  {course.icon}
                </motion.div>
                <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
                <p>{course.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center pt-10">
          <Link href="https://bit.ly/Learn-at-markazbayan">
            <motion.div
              className="px-8 py-4 text-white font-semibold bg-yellow-900 rounded-lg cursor-pointer flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Enroll Now
              <motion.div
                className="ml-2" // Adds spacing between text and arrow
                variants={arrowVariants}
                whileHover="hover" // Activate arrow animation on hover
              >
                <BsArrowRight />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
}
