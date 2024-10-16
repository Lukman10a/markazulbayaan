import { BookOpen, Heart } from "lucide-react";
import React from "react";
import { FaQuran } from "react-icons/fa";
import { LiaQuranSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa6";
import { BsHandIndex } from "react-icons/bs";
import { motion } from "framer-motion";

export default function CoursePage() {
  const courses = [
    {
      title: "Arabic Language",
      description:
        "Comprehensive Arabic courses for all levels, from beginners to advanced learners.",
      icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      title: "Quranic Studies",
      description:
        "In-depth Quranic courses focusing on recitation, memorization, and understanding.",
      icon: (
        <LiaQuranSolid className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
      ),
    },
    {
      title: "Tawhid (Islamic Monotheism)",
      description:
        "Courses on Islamic theology and monotheism to strengthen your faith and understanding.",
      icon: <BsHandIndex className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      title: "Tajwid",
      description: "Master the rules of Tajwid for perfect Quranic recitation.",
      icon: <FaBook className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
      title: "Fiqh",
      description: "Learn the Islamic jurisprudence that governs daily life.",
      icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    },
    {
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
              className="bg-background p-6 rounded-lg shadow-md text-center hover:shadow-xl hover:bg-black hover:text-white"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass index to stagger animations
              whileHover="hover"
            >
              <motion.div
                whileHover={{ rotate: 10 }} // Rotate icon slightly on hover
                className="icon"
              >
                {course.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
              <p>{course.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
