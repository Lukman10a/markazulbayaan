import React from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Book,
  BookOpen,
  Feather,
  Moon,
  Users,
  Clock,
  CheckCircle2,
  Banknote,
} from "lucide-react";

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
}

const CourseDetails: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Card className="mt-[-4rem] relative z-10 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl mb-2">Course Overview</CardTitle>
          <CardDescription className="text-lg">
            {course.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <Book className="h-5 w-5 mr-2 text-emerald-600" />
              <span>Instructor: {course.instructor}</span>
            </div>
            <div className="flex items-center">
              <Banknote className="h-5 w-5 mr-2 text-emerald-600" />
              <span>Price: {course.price}</span>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="syllabus">
              <AccordionTrigger>Course Syllabus</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {course.syllabus.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="objectives">
              <AccordionTrigger>Learning Objectives</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {course.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Enroll Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CourseDetails;
