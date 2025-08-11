import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Book,
  BookOpen,
  Users,
  CheckCircle2,
  Star,
  Award,
  Globe,
  GraduationCap,
  Target,
  FileText,
  Play,
  Download,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";

export interface Course {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  level?: string;
  duration?: string;
  students?: number;
  price: string;
  instructor: string;
  syllabus: string[];
  objectives: string[];
  // Enhanced course information (optional for backward compatibility)
  detailedDescription?: string;
  prerequisites?: string[];
  courseFormat?: string;
  language?: string;
  materials?: string[];
  assessment?: string;
  certificate?: string;
  difficulty?: number; // Scale of 1-5
  rating?: number;
  completionRate?: number;
}

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  const { theme } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 relative z-10 mt-32 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-4 lg:grid-cols-1 gap-8 lg:gap-6 md:gap-4">
        {/* Main Content */}
        <div className="col-span-3 lg:col-span-1 space-y-8 lg:space-y-6 md:space-y-4">
          {/* Course Overview Card */}
          <motion.div variants={itemVariants}>
            <Card
              className={`shadow-xl border-0 backdrop-blur-sm transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800/95" : "bg-white/95"
              }`}
            >
              <CardHeader className="pb-6 lg:pb-4 md:pb-3">
                <CardTitle
                  className={`text-3xl lg:text-2xl md:text-xl mb-3 lg:mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Course Overview
                </CardTitle>
                <CardDescription
                  className={`text-lg lg:text-base md:text-sm leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {course.detailedDescription || course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 lg:space-y-6 md:space-y-4">
                {/* Course Highlights */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4 md:gap-3">
                  <div className="space-y-4 lg:space-y-3 md:space-y-2">
                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Play className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Course Format
                    </h4>
                    <p
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {course.courseFormat || "Interactive Online Learning"}
                    </p>

                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Globe className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Language
                    </h4>
                    <p
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {course.language || "English with Arabic components"}
                    </p>
                  </div>

                  <div className="space-y-4 lg:space-y-3 md:space-y-2">
                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Award className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Assessment
                    </h4>
                    <p
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {course.assessment ||
                        "Continuous assessment with final evaluation"}
                    </p>

                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <GraduationCap className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Certificate
                    </h4>
                    <p
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {course.certificate ||
                        "Certificate of completion provided"}
                    </p>
                  </div>
                </div>

                {/* Prerequisites */}
                {course.prerequisites && course.prerequisites.length > 0 && (
                  <div className="space-y-3 lg:space-y-2">
                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <CheckCircle2 className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Prerequisites
                    </h4>
                    <ul className="space-y-2 lg:space-y-1">
                      {course.prerequisites.map((prerequisite, index) => (
                        <li
                          key={index}
                          className={`flex items-start lg:text-sm md:text-xs ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          <div className="w-2 h-2 lg:w-1.5 lg:h-1.5 bg-yellow-600 rounded-full mr-3 lg:mr-2 mt-2 lg:mt-1.5 flex-shrink-0"></div>
                          {prerequisite}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Course Materials */}
                {course.materials && course.materials.length > 0 && (
                  <div className="space-y-3 lg:space-y-2">
                    <h4
                      className={`text-lg lg:text-base md:text-sm font-semibold flex items-center ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <Download className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 text-yellow-600" />
                      Course Materials
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-2">
                      {course.materials.map((material, index) => (
                        <div
                          key={index}
                          className={`flex items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                            theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                          }`}
                        >
                          <BookOpen className="h-4 w-4 lg:h-3 lg:w-3 mr-3 lg:mr-2 text-yellow-600" />
                          <span
                            className={`lg:text-sm md:text-xs ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            {material}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Detailed Course Information */}
                <Accordion
                  type="multiple"
                  className="w-full space-y-2 lg:space-y-1"
                >
                  <AccordionItem
                    value="syllabus"
                    className={`border rounded-lg transition-colors duration-300 ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <AccordionTrigger className="px-4 lg:px-3 py-3 lg:py-2 hover:no-underline">
                      <div className="flex items-center">
                        <FileText className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-3 lg:mr-2 text-yellow-600" />
                        <span
                          className={`text-lg lg:text-base md:text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Course Syllabus
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 lg:px-3 pb-4 lg:pb-3">
                      <div className="space-y-3 lg:space-y-2">
                        {course.syllabus.map((item, index) => (
                          <div
                            key={index}
                            className={`flex items-start p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                              theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                            }`}
                          >
                            <div className="w-8 h-8 lg:w-6 lg:h-6 md:w-5 md:h-5 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm lg:text-xs font-semibold mr-3 lg:mr-2 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <p
                                className={`font-medium lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {item}
                              </p>
                              <p
                                className={`text-sm lg:text-xs md:text-xs mt-1 ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Detailed study and practical application of{" "}
                                {item.toLowerCase()}.
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="objectives"
                    className={`border rounded-lg transition-colors duration-300 ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <AccordionTrigger className="px-4 lg:px-3 py-3 lg:py-2 hover:no-underline">
                      <div className="flex items-center">
                        <Target className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-3 lg:mr-2 text-yellow-600" />
                        <span
                          className={`text-lg lg:text-base md:text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Learning Objectives
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 lg:px-3 pb-4 lg:pb-3">
                      <div className="grid gap-4 lg:gap-3 md:gap-2">
                        {course.objectives.map((objective, index) => (
                          <div
                            key={index}
                            className={`flex items-start p-4 lg:p-3 md:p-2 rounded-lg border transition-colors duration-300 ${
                              theme === "dark"
                                ? "bg-gradient-to-r from-gray-700 to-gray-600 border-gray-600"
                                : "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200"
                            }`}
                          >
                            <CheckCircle2 className="h-6 w-6 lg:h-5 lg:w-5 md:h-4 md:w-4 mr-4 lg:mr-3 md:mr-2 text-yellow-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h5
                                className={`font-semibold mb-1 lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                Objective {index + 1}
                              </h5>
                              <p
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                                }`}
                              >
                                {objective}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="details"
                    className={`border rounded-lg transition-colors duration-300 ${
                      theme === "dark" ? "border-gray-700" : "border-gray-200"
                    }`}
                  >
                    <AccordionTrigger className="px-4 lg:px-3 py-3 lg:py-2 hover:no-underline">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-3 lg:mr-2 text-yellow-600" />
                        <span
                          className={`text-lg lg:text-base md:text-sm font-semibold ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Course Details
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 lg:px-3 pb-4 lg:pb-3">
                      <div className="space-y-6 lg:space-y-4 md:space-y-3">
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-4 md:gap-3">
                          <div className="space-y-4 lg:space-y-3 md:space-y-2">
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Duration
                              </span>
                              <span
                                className={`font-semibold lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {course.duration}
                              </span>
                            </div>
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Level
                              </span>
                              <span
                                className={`font-semibold lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {course.level}
                              </span>
                            </div>
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Students Enrolled
                              </span>
                              <span
                                className={`font-semibold lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {course.students}+
                              </span>
                            </div>
                          </div>

                          <div className="space-y-4 lg:space-y-3 md:space-y-2">
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Rating
                              </span>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 lg:h-3 lg:w-3 fill-yellow-400 text-yellow-400 mr-1" />
                                <span
                                  className={`font-semibold lg:text-sm md:text-xs ${
                                    theme === "dark"
                                      ? "text-white"
                                      : "text-gray-900"
                                  }`}
                                >
                                  {course.rating || "4.8"}
                                </span>
                              </div>
                            </div>
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Completion Rate
                              </span>
                              <span
                                className={`font-semibold lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {course.completionRate || "90"}%
                              </span>
                            </div>
                            <div
                              className={`flex justify-between items-center p-3 lg:p-2 rounded-lg transition-colors duration-300 ${
                                theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                              }`}
                            >
                              <span
                                className={`lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Instructor
                              </span>
                              <span
                                className={`font-semibold lg:text-sm md:text-xs ${
                                  theme === "dark"
                                    ? "text-white"
                                    : "text-gray-900"
                                }`}
                              >
                                {course.instructor}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Course Difficulty */}
                        <div
                          className={`p-4 lg:p-3 md:p-2 rounded-lg border transition-colors duration-300 ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-blue-900 to-indigo-900 border-blue-700"
                              : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2 lg:mb-1">
                            <span
                              className={`font-medium lg:text-sm md:text-xs ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              Course Difficulty
                            </span>
                            <span
                              className={`text-sm lg:text-xs md:text-xs ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              }`}
                            >
                              {course.difficulty || 3}/5
                            </span>
                          </div>
                          <div className="flex space-x-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 ${
                                  i < (course.difficulty || 3)
                                    ? "fill-blue-400 text-blue-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>

              <CardFooter
                className={`pt-6 lg:pt-4 md:pt-3 border-t transition-colors duration-300 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <div className="flex flex-col lg:flex-col gap-4 lg:gap-3 md:gap-2 w-full">
                  <Link href="/contact" className="flex-1">
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 lg:py-2 text-lg lg:text-base md:text-sm">
                      Enroll Now - {course.price}
                    </Button>
                  </Link>
                  <Link href="/contact" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-yellow-600 text-yellow-600 hover:bg-yellow-50 font-semibold py-3 lg:py-2 lg:text-base md:text-sm"
                    >
                      <MessageCircle className="h-4 w-4 lg:h-3 lg:w-3 mr-2 lg:mr-1" />
                      Ask Questions
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Instructor Information */}
          <motion.div variants={itemVariants}>
            <Card
              className={`shadow-lg transition-colors duration-300 ${
                theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"
              }`}
            >
              <CardHeader>
                <CardTitle
                  className={`text-2xl lg:text-xl md:text-lg flex items-center ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <GraduationCap className="h-6 w-6 lg:h-5 lg:w-5 md:h-4 md:w-4 mr-3 lg:mr-2 text-yellow-600" />
                  About Your Instructor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4 lg:space-x-3 md:space-x-2">
                  <div className="w-16 h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl lg:text-lg md:text-base">
                    {course.instructor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`text-xl lg:text-lg md:text-base font-semibold mb-2 lg:mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.instructor}
                    </h4>
                    <p
                      className={`lg:text-sm md:text-xs leading-relaxed ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      A qualified Islamic scholar with extensive knowledge in
                      Islamic studies, Arabic language, and Quranic sciences.
                      Dedicated to providing authentic Islamic education with
                      traditional methodology adapted for modern learning.
                    </p>
                    <div
                      className={`flex items-center space-x-4 lg:space-x-3 md:space-x-2 mt-4 lg:mt-3 md:mt-2 text-sm lg:text-xs md:text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <span className="flex items-center">
                        <Book className="h-4 w-4 lg:h-3 lg:w-3 mr-1" />6 Courses
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 lg:h-3 lg:w-3 mr-1" />
                        160+ Students
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 lg:h-3 lg:w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        4.8 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sticky Sidebar */}
        <div className="col-span-1 lg:col-span-1 lg:order-first">
          <div className="sticky top-6 lg:static space-y-6 lg:space-y-4 md:space-y-3">
            {/* Quick Stats */}
            <motion.div variants={itemVariants}>
              <Card
                className={`shadow-lg transition-colors duration-300 ${
                  theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-lg lg:text-base md:text-sm ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Course Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 lg:space-y-3 md:space-y-2">
                  <div className="flex justify-between items-center">
                    <span
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Students
                    </span>
                    <span
                      className={`font-semibold lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.students}+
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Success Rate
                    </span>
                    <span
                      className={`font-semibold lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.completionRate || "90"}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Rating
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 lg:h-3 lg:w-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span
                        className={`font-semibold lg:text-sm md:text-xs ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {course.rating || "4.8"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span
                      className={`lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Duration
                    </span>
                    <span
                      className={`font-semibold lg:text-sm md:text-xs ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {course.duration}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support */}
            <motion.div variants={itemVariants}>
              <Card
                className={`shadow-lg border-yellow-200 transition-colors duration-300 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-yellow-900 to-amber-900"
                    : "bg-gradient-to-br from-yellow-50 to-amber-50"
                }`}
              >
                <CardHeader>
                  <CardTitle
                    className={`text-lg lg:text-base md:text-sm flex items-center ${
                      theme === "dark" ? "text-yellow-200" : "text-yellow-800"
                    }`}
                  >
                    <MessageCircle className="h-5 w-5 lg:h-4 lg:w-4 md:h-3 md:w-3 mr-2 lg:mr-1" />
                    Need Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`mb-4 lg:mb-3 md:mb-2 text-sm lg:text-xs md:text-xs ${
                      theme === "dark" ? "text-yellow-100" : "text-yellow-700"
                    }`}
                  >
                    Have questions about this course? Our team is here to help
                    you choose the right path for your Islamic education
                    journey.
                  </p>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className={`w-full border-yellow-600 text-yellow-600 hover:bg-yellow-100 lg:text-sm md:text-xs ${
                        theme === "dark" ? "hover:bg-yellow-800" : ""
                      }`}
                    >
                      Contact Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;
