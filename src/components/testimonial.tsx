import React, { useEffect, useState } from "react";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import Button from "./button";

export function Testimonials() {
  return (
    <section className="pt-10">
      {/* <div className="px-10">
        <Button
          text={"Archives"}
          className="rounded-full bg-[#006CFE] p-2 font-normal text-white"
        />
        <h3 className="mb-8 mt-3 w-9/12 text-7xl font-medium md:w-full 2md:mb-8 2md:text-5xl">
          <span className="text-[#BBBBBB]">What our</span>{" "}
          <span>Customers say about </span>{" "}
          <span className="text-[#BBBBBB]">us.</span>
        </h3>
      </div>

      <div className="dark:bg-grid-white/[0.05] relative flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="dark:bg-grid-white/[0.05] relative flex h-[20rem] flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black">
        <InfiniteMovingCards
          className="bg-white text-black"
          items={testimonials}
          direction="left"
          speed="slow"
        />
      </div> */}
      Testimonial
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Partnering with Consology has been a game-changer for our business. Their innovative solutions and dedicated support have significantly enhanced our operational efficiency.",
    name: "Yusuf Abbass",
    title: "CTO - Microsoft",
  },
  {
    quote:
      "The team at Consology truly understands our needs and consistently delivers outstanding results. Their expertise in software development is unparalleled.",
    name: "Sarah Johnson",
    title: "CEO - Tech Innovators Inc.",
  },
  {
    quote:
      "From the initial consultation to the final product, Consology exceeded our expectations at every stage. Their attention to detail and commitment to quality are second to none.",
    name: "David Smith",
    title: "Product Manager - StartUp Solutions",
  },
  {
    quote:
      "We were impressed by [Your Company's] ability to integrate seamlessly with our existing systems. Their solutions have driven significant growth and efficiency for our business.",
    name: "Emma Brown",
    title: "COO - Enterprise Technologies",
  },
  {
    quote:
      "Consology provided us with a comprehensive software solution that addressed all our needs. Their team was professional, responsive, and a pleasure to work with.",
    name: "Michael Lee",
    title: "IT Director - Global Enterprises",
  },
];
