import React from "react";
import { useRouter } from "next/router";

import { courses } from ".";
import CourseHero from "@/components/Coursehero";
import CourseDetails from "@/components/CourseDetails";
import { useTheme } from "@/lib/theme-context";

export default function CourseDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const course = courses.find((c) => c.slug === slug);
  const { theme } = useTheme();

  if (!course) {
    return (
      <div className={`text-center py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'
      }`}>
        Course not found
      </div>
    );
  }

  return (
    <div className={`min-h-screen mb-3 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <CourseHero course={course} />
      <CourseDetails course={course} />
    </div>
  );
}
