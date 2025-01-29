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
import Link from "next/link";

type Course = {
  title: string;
  description: string;
  link: string;
  imageSrc: string | StaticImageData;
  logo: React.ReactNode;
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
    },
    {
      imageSrc: quran_course,
      logo: <FaBook />,
      title: "Beginner Quranic Studies (Juz Amma)",
      description:
        "In-depth Quranic courses focusing on recitation, memorization, and understanding.",
      link: "/course/arabic",
    },
    {
      imageSrc: tawhid_course,
      title: "Tawhid (Islamic Monotheism)",
      logo: <FaBook />,
      description:
        "Courses on Islamic theology and monotheism to strengthen your faith and understanding.",
      link: "/course/arabic",
    },
    {
      imageSrc: tafsir_course,
      logo: <FaBook />,
      title: "Tafsir",
      description: "Understand the meanings and interpretations of the Quran.",
      link: "/course/arabic",
    },
    {
      imageSrc: fiqh_course,
      title: "Fiqh",
      logo: <RiGraduationCapFill />,
      description: "Learn the Islamic jurisprudence that governs daily life.",
      link: "/course/arabic",
    },
    {
      imageSrc: tajwid_course,
      title: "Tajwid",
      logo: <RiGraduationCapFill />,
      description: "Master the art of Quranic recitation with Tajwid rules.",
      link: "/course/tajwid",
    },
  ];

  return (
    <div>
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
      <div className="p-20 sm:p-8 grid grid-cols-2 gap-10 sm:grid-cols-1">
        {courses.map((course, index) => (
          <div key={index} className="cursor-pointer">
            <Image
              src={course.imageSrc}
              alt={course.title}
              width={200}
              height={200}
              className="h-[300px] w-full"
            />
            <div className="mt-4 space-y-5">
              {course.logo}
              <h3 className="text-2xl font-semibold">{course.title}</h3>
              <p>{course.description}</p>
              <button>
                <Link
                  href={course.link}
                  className="text-blue-600 hover:text-blue-700"
                >
                  Learn More
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
