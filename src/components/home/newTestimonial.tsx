"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface Testimonial {
  comment: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Bro Abdur-Rahmaan ",
    location: "UK",
    comment:
      "Ustadh Lukman bn Abdir-Rauf breaks down difficult Arabic grammar and vocabulary into manageable parts, making it accessible for students of all levels. With clear explanations and an engaging teaching style, he has greatly improved my understanding of the language. This approach ensures that students grasp the basics thoroughly, leading to a deeper and more lasting understanding of Arabic. I highly recommend Ustadh Lukman bn Abdir-Rauf to anyone seeking a comprehensive and lasting mastery of the language.",
  },
  {
    name: "Umm Firdaus Belgium",
    location: "Belgium",
    comment:
      "I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering a wide range of services: Arabic, Aqeedah, Quran, and more all very helpful. You listen attentively to feedback and work together to find solutions. Overall, I am very pleased with this experience. I would definitely recommend signing your kids up for these courses",
  },
  {
    name: "Umm Sumayyah",
    location: "UK",
    comment:
      "Alhamdulillah I've really benefitted from the class. I started off not having knowledge of mostly the basics, but Alhamdulillah with what we've covered especially in fiqh has really helped. And Alhamdulillah now I've also même prized over 30 hadiths and also have the understanding. What I really like about the class is how short the classes are and not lengthy so we are able to process the information.",
  },
  {
    name: "Umm AbiBakr",
    location: "Ghana",
    comment:
      "As salaamu alaykum WaRahmatuLlah WaBarakatuh Markazul Bayaan is one of the best Quranic institute I have ever come across. Their teachers have patience which makes learning easy. And they teach in a way which make memorization easy. The class is fix to suit your schedule . I purchased for Qur’an course but I’m been taught a book in addition and I get to ask any questions about Islam. And it has deepen my Islamic knowledge. I recommend everyone whether a beginner or an advanced student to enroll in any of their courses. And you will appreciate it. In shaa Allah.",
  },
  {
    name: "Sis Taqiyyah",
    location: "Ghana",
    comment:
      "As Salamualeikum, I recommend Markazul Bayaan to anyone seeking a comprehensive and engaging Islamic education.This Quran class has deepened my understanding, recitation and spiritual growth.It indeed benefit beginners seeking foundational knowledge",
  },
  {
    name: "Sis Bint",
    location: "Nigeria",
    comment:
      "This is an honest review, ĪnshaAllah. The 6 weeks Arabic course has been so beneficial, Alhamdulilah. From the videos to the class materials and the necessary reminders. The highlight of the class for me is the fact that, one way or the other the class actually helped in being consistent with my other ibaadat. May Allah bless the organizers and grant us, the students more understanding of the deen. ",
  },
  {
    name: "Sis Iqra Kareem",
    location: "India",
    comment:
      "I took Islamic studies, Arabic speaking, and Quran classes for my daughter. The teacher was patient and dedicated. I really saw an improvement in my daughter's memorization in less than a month. May Allah bless everyone associated with the organization. Jazak Allah Khair! ",
  },
  {
    name: "Umm Abdillah Leyla",
    location: "Sweeden",
    comment:
      "Asalamu aleykum . AlhamduliLah I am really happy I enrolled the class. I've really benefitted alot. The classes are interactive and there's the opportunity to ask the teacher anything you don't grasp.  The classes are very good Allahumma barik. I highly recommend ",
  },
  {
    name: "Aisha Lawak",
    location: "Egypt",
    comment:
      "Asalaam Alaykum warahmatullah wa barakatuh. Alhamdullilah, I just completed the intensive course and Baarakallahu feeh, it was very good. The class videos were always posted on time with full explanations along with the book on screen, the course material was well thought of and gave detailed explanations of the principles taught in the book. The instructors also answered any questions I had. A massive bonus is that classes are segregated. Overall, a well-planned and structured course that achieved its objectives.",
  },
];

export default function TestimonialCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <Carousel
        setApi={setApi}
        className="relative"
        opts={{
          align: "center",
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="text-center px-6 sm:px-12 md:px-24">
                <blockquote className="text-lg sm:text-xl italic text-gray-700 mb-6">
                  &quot;{testimonial.comment}&quot;
                </blockquote>
                <div className="space-y-1">
                  <div className="font-medium text-xl text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-lg text-gray-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
      </Carousel>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? "bg-gray-900" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
