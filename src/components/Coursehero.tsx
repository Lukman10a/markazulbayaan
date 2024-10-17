import { Clock, GraduationCap, Users } from "lucide-react";
import React from "react";
import { Course } from "./CourseDetails";
import { Badge } from "./ui/badge";

const CourseHero: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-teal-600 text-white py-16 px-4 mb-3">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white p-4 rounded-full">
            {React.cloneElement(course.icon as React.ReactElement, {
              className: "h-12 w-12 text-emerald-600",
            })}
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          {course.title}
        </h1>
        <p className="text-xl text-center mb-8">{course.description}</p>
        <div className="flex flex-wrap justify-center gap-4 text-emerald-900">
          <Badge variant="secondary" className="text-lg py-1 px-3 font-medium">
            <Clock className="inline-block mr-2 h-5 w-5" />
            {course.duration}
          </Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3 font-medium">
            <Users className="inline-block mr-2 h-5 w-5" />
            {course.students}+ students
          </Badge>
          <Badge variant="secondary" className="text-lg py-1 px-3 font-medium">
            <GraduationCap className="inline-block mr-2 h-5 w-5" />
            {course.level}
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
