import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@/lib/types";
import Autoplay from "embla-carousel-autoplay";

export const testimonialsData = [
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
              delay: 5000,
            }),
          ]}
          className="flex-1 w-full lg:w-auto"
        >
          <CarouselContent>
            {testimonialsData
              .slice(0, 3)
              .map(
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
                        <p className="text-sm md:text-base  mb-4">
                          &ldquo;{testimonial.comment}&rdquo;
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
