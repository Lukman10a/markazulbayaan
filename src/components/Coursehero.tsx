import { Clock, GraduationCap, Users, Star, BarChart3, Award, Globe, BookOpen } from "lucide-react";
import React from "react";
import { Course } from "./CourseDetails";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const CourseHero: React.FC<{ course: Course }> = ({ course }) => {
  // Helper function to render difficulty stars
  const renderDifficulty = (difficulty: number = 3) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < difficulty ? "fill-blue-400 text-blue-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat bg-center" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 xl:py-20 lg:py-16 md:py-12 sm:py-8">
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-8 xl:gap-10 lg:gap-6 md:gap-4">
          {/* Main Content - Left Side */}
          <div className="col-span-2 lg:col-span-1 space-y-6 lg:space-y-4 md:space-y-3">
            {/* Course Icon and Category */}
            <motion.div 
              className="flex items-center space-x-4 md:space-x-3 sm:space-x-2"
              variants={itemVariants}
            >
              <div className="bg-white/20 backdrop-blur-sm p-4 md:p-3 sm:p-2 rounded-2xl lg:rounded-xl md:rounded-lg">
                {React.cloneElement(course.icon as React.ReactElement, {
                  className: "h-12 w-12 lg:h-10 lg:w-10 md:h-8 md:w-8 text-white",
                })}
              </div>
              <div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2 md:mb-1 sm:text-xs">
                  Islamic Studies
                </Badge>
                <p className="text-white/80 text-sm md:text-xs">
                  {course.level} Level • {course.courseFormat || "Online Course"}
                </p>
              </div>
            </motion.div>

            {/* Course Title */}
            <motion.h1 
              className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold leading-tight"
              variants={itemVariants}
            >
              {course.title}
            </motion.h1>

            {/* Course Description */}
            <motion.p 
              className="text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-white/90 leading-relaxed max-w-3xl"
              variants={itemVariants}
            >
              {course.detailedDescription || course.description}
            </motion.p>

            {/* Course Stats */}
            <motion.div 
              className="flex flex-wrap gap-6 lg:gap-4 md:gap-3 sm:gap-2 pt-4 lg:pt-3 md:pt-2"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2 md:space-x-1">
                <Star className="h-5 w-5 md:h-4 md:w-4 fill-blue-300 text-blue-300" />
                <span className="font-semibold md:text-sm">{course.rating || "4.8"}</span>
                <span className="text-white/70 md:text-sm sm:text-xs">rating</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-1">
                <Users className="h-5 w-5 md:h-4 md:w-4" />
                <span className="font-semibold md:text-sm">{course.students}+</span>
                <span className="text-white/70 md:text-sm sm:text-xs">students</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-1">
                <BarChart3 className="h-5 w-5 md:h-4 md:w-4" />
                <span className="font-semibold md:text-sm">{course.completionRate || "90"}%</span>
                <span className="text-white/70 md:text-sm sm:text-xs">completion</span>
              </div>
            </motion.div>

            {/* Course Badges */}
            <motion.div 
              className="flex flex-wrap gap-3 lg:gap-2 md:gap-1.5"
              variants={itemVariants}
            >
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1 md:px-2 md:py-0.5 md:text-xs">
                <Clock className="inline-block mr-2 md:mr-1 h-4 w-4 md:h-3 md:w-3" />
                {course.duration}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1 md:px-2 md:py-0.5 md:text-xs">
                <GraduationCap className="inline-block mr-2 md:mr-1 h-4 w-4 md:h-3 md:w-3" />
                {course.level}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1 md:px-2 md:py-0.5 md:text-xs">
                <Globe className="inline-block mr-2 md:mr-1 h-4 w-4 md:h-3 md:w-3" />
                {course.language || "English & Arabic"}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-3 py-1 md:px-2 md:py-0.5 md:text-xs">
                <Award className="inline-block mr-2 md:mr-1 h-4 w-4 md:h-3 md:w-3" />
                Certificate
              </Badge>
            </motion.div>
          </div>

          {/* Enrollment Card - Right Side */}
          <motion.div 
            className="col-span-1 lg:col-span-1 lg:mt-6"
            variants={itemVariants}
          >
            <div className="bg-white rounded-2xl lg:rounded-xl shadow-2xl p-6 lg:p-5 md:p-4 space-y-6 lg:space-y-4 md:space-y-3 sticky top-6 lg:static">
              {/* Price */}
              <div className="text-center">
                <div className="text-3xl lg:text-2xl md:text-xl font-bold text-gray-900 mb-1">
                  {course.price}
                </div>
                <p className="text-gray-600 md:text-sm">Complete course access</p>
              </div>

              {/* Difficulty Level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm md:text-xs font-medium text-gray-700">Difficulty Level</span>
                  <span className="text-sm md:text-xs text-gray-600">{course.difficulty || 3}/5</span>
                </div>
                <div className="flex space-x-1">
                  {renderDifficulty(course.difficulty)}
                </div>
              </div>

              {/* Key Info */}
              <div className="space-y-3 lg:space-y-2 border-t border-gray-200 pt-4 lg:pt-3">
                <div className="flex justify-between text-sm md:text-xs">
                  <span className="text-gray-600">Instructor</span>
                  <span className="font-medium text-gray-900">{course.instructor}</span>
                </div>
                <div className="flex justify-between text-sm md:text-xs">
                  <span className="text-gray-600">Format</span>
                  <span className="font-medium text-gray-900">{course.courseFormat || "Online"}</span>
                </div>
                <div className="flex justify-between text-sm md:text-xs">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium text-gray-900">{course.language || "English/Arabic"}</span>
                </div>
                <div className="flex justify-between text-sm md:text-xs">
                  <span className="text-gray-600">Certificate</span>
                  <span className="font-medium text-gray-900">
                    {course.certificate ? "Yes" : "Upon completion"}
                  </span>
                </div>
              </div>

              {/* Enrollment Buttons */}
              <div className="space-y-3 lg:space-y-2">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 lg:py-2.5 md:py-2 text-lg lg:text-base md:text-sm rounded-lg shadow-lg transform transition hover:scale-105">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 lg:py-2.5 md:py-2 lg:text-base md:text-sm rounded-lg">
                    Ask Questions
                  </Button>
                </Link>
              </div>

              {/* What's Included Preview */}
              <div className="border-t border-gray-200 pt-4 lg:pt-3">
                <h4 className="font-semibold text-gray-900 mb-3 lg:mb-2 flex items-center lg:text-base md:text-sm">
                  <BookOpen className="h-4 w-4 md:h-3 md:w-3 mr-2" />
                  Course Includes
                </h4>
                <ul className="space-y-2 lg:space-y-1 text-sm md:text-xs text-gray-600">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 lg:mr-2"></div>
                    {course.materials?.[0] || "Course materials"}
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 lg:mr-2"></div>
                    {course.materials?.[1] || "Live sessions"}
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 lg:mr-2"></div>
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 lg:mr-2"></div>
                    Lifetime access
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseHero;
