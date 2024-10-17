import { BookOpen } from "lucide-react";
import React, { Fragment } from "react";
import { LiaQuranSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa6";
import { BsHandIndex } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Button from "@/components/button";

export const courses = [
  {
    id: 1,
    slug: "arabic",
    title: "Arabic Language",
    description:
      "Comprehensive Arabic courses for all levels, from beginners to advanced learners.",
    icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "3 months",
    students: 5,
    price: "$100 monthly",
    instructor: "Abu Kawthar Lukman",
    level: "Beginner",
    syllabus: [
      "Introduction to Arabic alphabet and pronunciation",
      "Basic Arabic grammar and sentence structure",
      "Quranic vocabulary and common phrases",
      "Analysis of selected Quranic verses",
      "Practice in reading and understanding Quranic passages",
    ],
    objectives: [
      "Read and write Arabic with proper pronunciation",
      "Understand basic Quranic vocabulary and grammar",
      "Analyze and interpret selected Quranic verses",
      "Develop a foundation for further Arabic language studies",
    ],
  },
  {
    id: 2,
    slug: "quran",
    title: "Beginner Quranic Studies (Juz Amma)",
    level: "Beginner",
    description:
      "In-depth Quranic courses focusing on recitation, memorization, and understanding.",
    icon: <LiaQuranSolid className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "6 months",
    students: 10,
    price: "$120",
    instructor: "Abu Kawthar Lukman",
    syllabus: [
      "Introduction to Quranic recitation techniques",
      "Memorization strategies and tips",
      "Understanding the meanings of selected verses",
      "Tafsir (interpretation) of key Quranic passages",
      "Practicing correct pronunciation and intonation",
    ],
    objectives: [
      "Recite the Quran with proper Tajwid",
      "Memorize selected Surahs with understanding",
      "Comprehend the meanings of key verses",
      "Develop skills in Tafsir and Quranic interpretation",
    ],
  },
  {
    id: 3,
    slug: "tawhid",
    title: "Tawhid (Islamic Monotheism)",
    level: "All levels",
    description:
      "Courses on Islamic theology and monotheism to strengthen your faith and understanding.",
    icon: <BsHandIndex className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "4 months",
    students: 5,
    price: "$100 monthly",
    instructor: "Abu Kawthar Lukman",
    syllabus: [
      "Studying books and treatises of Tawhid with scholarly explanations",
      "Understanding the concept of Tawhid",
      "Shirk and its various forms",
      "Attributes of Allah (Asma wa Sifat)",
      "Tawhid in worship and daily life",
      "Application of Tawhid principles in contemporary contexts",
    ],
    objectives: [
      "Comprehend the concept of Islamic monotheism",
      "Identify and avoid different forms of Shirk",
      "Apply Tawhid in personal worship and actions",
      "Strengthen faith through understanding Islamic theology",
    ],
  },
  {
    id: 4,
    slug: "tafsir",
    title: "Tafsir",
    description: "Understand the meanings and interpretations of the Quran.",
    icon: <FaBook className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "6 months",
    students: 5,
    price: "$70 monthly",
    instructor: "Abu Kawthar Lukman",
    syllabus: [
      "Introduction to Tafsir and its importance",
      "Major Tafsir works and scholars",
      "Methods of interpreting the Quran",
      "Analysis of selected Surahs and verses",
      "Application of Tafsir in daily life",
    ],
    objectives: [
      "Understand the principles of Quranic interpretation",
      "Analyze and interpret key Quranic passages",
      "Familiarize with major Tafsir works and methodologies",
      "Apply Tafsir to contemporary issues and contexts",
    ],
  },
  {
    id: 5,
    slug: "fiqh",
    title: "Fiqh",
    level: "Beginner",
    description: "Learn the Islamic jurisprudence that governs daily life.",
    icon: <BookOpen className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "8 weeks",
    students: 15,
    price: "$70 monthly",
    instructor: "Abu Kawthar Lukman",
    syllabus: [
      "Foundations of Islamic jurisprudence",
      "Study of major schools of Islamic law",
      "Fiqh of worship (Ibadah)",
      "Fiqh of transactions (Muamalat)",
      "Contemporary Fiqh issues",
    ],
    objectives: [
      "Understand the principles and methodologies of Islamic jurisprudence",
      "Compare and contrast different schools of Islamic law",
      "Apply Fiqh principles to contemporary issues",
      "Develop skills in deriving Islamic rulings from primary sources",
    ],
  },
  {
    id: 6,
    slug: "tajwid",
    title: "Tajwid",
    level: "Beginner",
    description: "Master the rules of Tajwid for perfect Quranic recitation.",
    icon: <FaBook className="w-12 h-12 mx-auto mb-4 text-yellow-600" />,
    duration: "4 months",
    students: 120,
    price: "$50 monthly",
    instructor: "Abu Kawthar Lukman",
    syllabus: [
      "Introduction to Tajwid rules",
      "Articulation points of Arabic letters",
      "Rules of the silent nuun and tanwin",
      "Rules of elongation (Madd)",
      "Rules of stopping and starting (Waqf and Ibtida)",
      "Practice and recitation of selected Surahs",
    ],
    objectives: [
      "Recite the Quran with proper pronunciation and intonation",
      "Understand and apply the rules of Tajwid",
      "Improve overall Quranic recitation skills",
      "Gain confidence in leading prayers and reciting in public",
    ],
  },
];

export default function CoursePage() {
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
    <Fragment>
      <section className="bg-[url(/assets/Image.png)] bg-center object-cover text-center bg-cover overflow-hidden py-10">
        <div className="px-[5vw] text-white top-[10vmin] lg:top-[7vmax]">
          <h1
            style={{
              color: "transparent",
              textShadow: "0px 2px 1px #F8E7C5",
              backgroundClip: "text",
              backgroundColor: "#565656",
            }}
            className="text-[8vmin] md:text-[8vmin] lg:text-[9vmin] font-extrabold mb-[3.5vmin] "
          >
            Our Courses
          </h1>
          <p className="text-[3vmin] xl:text-[3vmin] sm:text-[2vmin] font-medium leading-normal  ">
            Embark on your journey of Islamic knowledge with our comprehensive
            range of courses.
          </p>
          <div className="my-[2.5vmin]">
            <Link href="/contact">
              <Button text="Contact us" />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-yellow-50 ">
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
                  as={`/course/${course.slug}`}
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
    </Fragment>
  );
}
