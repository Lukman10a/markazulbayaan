import React from "react";
import { InView } from "../ui/animated/in-view";
import Image from "next/image";
import student from "../../../public/assets/student.png";
import house from "../../../public/assets/house.png";
import { useTheme } from "@/lib/theme-context";

export default function Platform() {
  const { theme } = useTheme();

  return (
    <div className={`py-16 px-4 md:px-8 lg:px-16 font-serif max-w-7xl mx-auto transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Header Section */}
      <div className="flex justify-between sm:flex-col py-6 items-center overflow-hidden">
        <div className="sm:self-start">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2 className={`text-6xl sm:text-2xl font-medium mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              A Platform to Learn <br /> the Qur&apos;an & Sunnah
            </h2>
          </InView>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className={`max-w-2xl text-lg sm:text-sm text-left ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Master the recitation of the Qur&apos;an (with Tajweed) and immerse
            yourself in the <br /> teachings of Prophet Muhammad (peace and
            blessing of Allah be upon him) through <br /> the Sunnah.
            Additionally, our curriculum offers in-depth learning of Hadith,
            Arabic <br /> language (reading and writing), Fiqh, Tafsir, and
            other essential Islamic sciences.
          </p>
        </InView>
      </div>

      {/* Stats Section */}
      <section className="grid grid-cols-3 sm:grid-cols-1 gap-4 mt-12">
        {/* Quranic Lessons Delivered */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div
            className="relative bg-cover bg-center h-[525px] text-white text-lg font-semibold p-6 rounded-lg"
            style={{ backgroundImage: "url(/assets/lesson.jpg)" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold">100+</h3>
              <p>Quranic Lessons Delivered</p>
            </div>
          </div>
        </InView>

        {/* Students Benefited */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="space-y-4">
            <div className={`text-center p-6 rounded-lg h-[250px] ${
              theme === 'dark' 
                ? 'bg-blue-900 text-blue-100' 
                : 'bg-blue-200 text-gray-800'
            }`}>
              <h3 className="text-4xl font-bold">500+</h3>
              <p className={theme === 'dark' ? 'text-blue-200' : 'text-gray-600'}>
                Students have benefited
              </p>
            </div>
            <Image src={student} alt="student" />
          </div>
        </InView>

        {/* Hours of Learning */}
        <InView
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="space-y-4">
            <Image src={house} alt="student" />

            <div className={`text-center p-6 rounded-lg h-[250px] ${
              theme === 'dark' 
                ? 'bg-yellow-900 text-yellow-100' 
                : 'bg-yellow-100 text-gray-800'
            }`}>
              <h3 className="text-4xl font-bold">100+</h3>
              <p className={theme === 'dark' ? 'text-yellow-200' : 'text-gray-600'}>
                Hours of Learning
              </p>
            </div>
          </div>
        </InView>
      </section>
    </div>
  );
}
