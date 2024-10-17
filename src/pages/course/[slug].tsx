import React from "react";
import { useRouter } from "next/router";

import { courses } from ".";
import CourseHero from "@/components/Coursehero";
import CourseDetails from "@/components/CourseDetails";

export default function CourseDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return <div className="text-center py-16">Course not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mb-3">
      <CourseHero course={course} />
      <CourseDetails course={course} />
    </div>
  );
}
