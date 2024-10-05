import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";

const testimonialsData = [
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
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-8">
        {/* Text Section */}
        <section className="px-4 py-8 flex-1 text-center lg:text-left">
          <p className="py-4 uppercase font-bold text-neutral-700">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            What people say about <br />
            <span className="text-orange-500">MARKAZUL-BAYAN</span>
          </h2>
        </section>
        {/* Carousel for testimonials */}
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="flex-1 w-full lg:w-auto"
        >
          <CarouselContent>
            {testimonialsData.map(
              (
                testimonial: Testimonial,
                index: React.Key | null | undefined
              ) => (
                <CarouselItem
                  key={index}
                  className="max-w-full lg:max-w-md mx-auto"
                >
                  <Card className="p-6">
                    <CardContent>
                      <p className="text-sm md:text-base lg:text-lg mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center">
                        <Image
                          src={"/assets/profile.png"}
                          alt="profile image"
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <p className="text-xs md:text-base">
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
          {/*TODO: ADD/UNCOMMENT later when ready to fix */}
          {/* <div>
            <CarouselPrevious />
            <CarouselNext />
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
