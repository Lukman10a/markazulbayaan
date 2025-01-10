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
  quote: string;
  author: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I am very satisfied with your accessibility, willingness to help, and flexibility. You go above and beyond to assist, offering a wide range of services: Arabic, Aqeedah, Quran, and more all very helpful. You listen attentively to feedback and work together to find solutions. Overall, I am very pleased with this experience. I would definitely recommend signing your kids up for these courses",
    author: "Umm Firdaus",
    location: "Belgium",
  },
  {
    quote:
      "The teaching methodology is excellent and very effective. My children have improved significantly in their Quran reading and understanding.",
    author: "Sarah Ahmed",
    location: "United Kingdom",
  },
  {
    quote:
      "The flexibility of the program and the patience of the teachers has made learning enjoyable for my kids.",
    author: "Mohammad Hassan",
    location: "Canada",
  },
  {
    quote:
      "Exceptional service and dedication to teaching. The progress my children have made is remarkable.",
    author: "Aisha Omar",
    location: "United States",
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
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="space-y-1">
                  <div className="font-medium text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
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
