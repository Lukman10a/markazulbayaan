import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import Button from "./button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsData = [
  {
    quote:
      "The lessons on Arabic grammar were clear and easy to follow. I now feel much more confident in my recitation and understanding of the Qur'an.",
    name: "Abu Jamal Al-Athary",
    location: "Olunlade, Ilorin Nigeria",
  },
  {
    quote:
      "Markazul-Bayan's approach to teaching the Arabic language is exceptional. I've learned so much in such a short time, and the teachers are incredibly supportive.",
    name: "Abu Khadija Al-Fulani",
    location: "Zaria, Nigeria",
  },
  {
    quote:
      "I appreciate the structured roadmap provided for beginners. It helped me develop a solid foundation in Qur'an recitation and writing skills.",
    name: "Abu Isa Ibn Daud",
    location: "Kano, Nigeria",
  },
];

export function Testimonials() {
  return (
    <section className="py-10 bg-yellow-50 -mt-[25px] mb-[20px]">
      <div className=" ">
        <div className="md:flex md:items-center md:justify-between  px-4 py-8 container">
          <section className="px-4 py-8 container md:min-w-[40%]">
            <p className="py-4 uppercase font-bold text-neutral-700">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold mb-8">
              What people say about <br />{" "}
              <span className="text-orange-500">MARKAZUL-BAYAN</span>
            </h2>
            {/* Carousel for testimonials */}
          </section>
          <Carousel className="w-full">
            <CarouselContent>
              {TestimonialsData.map(
                (
                  testimonial: Testimonial,
                  index: React.Key | null | undefined
                ) => (
                  <CarouselItem key={index}>
                    <Card className="p-6">
                      <CardContent>
                        <p className="text-sm mb-4">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="flex items-center">
                          <Image
                            src={"/../../public/assets/profile.png"}
                            alt="profile image"
                            width={50}
                            height={50}
                          />
                          <div className="ml-4">
                            <p className="text-xs md:text-lg">
                              {testimonial.name}
                            </p>
                            <p className="text-xs md:text-sm">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
