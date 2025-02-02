import Image from "next/image";
import React from "react";
import learn from "../../../public/assets/learn.png";
import Button from "../button";
import { InView } from "../ui/animated/in-view";
import NewButton from "../ui/newButton";

export default function Learn() {
  const features = [
    {
      icon: "/svg/graduation-cap.svg",
      text: "Learn from qualified instructors with deep expertise",
    },
    {
      icon: "/svg/calendar-clock.svg",
      text: "Tailored study plans that suit your pace",
    },
    {
      icon: "/svg/users.svg",
      text: "Join a vibrant community to support your journey",
    },
  ];

  return (
    <section className="grid grid-cols-2 place-items-center sm:grid-cols-1 py-20 md:space-x-6 p-8 sm:p-2 max-w-[90vw] mx-auto gap-10 overflow-hidden">
      <InView
        variants={{
          hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="rounded-lg overflow-hidden shadow-lg mb-5 h-full">
          <Image
            src={learn}
            alt="Islamic Knowledge Image"
            width={500}
            height={400}
            className="w-full h-full"
          />
        </div>
      </InView>

      <InView
        variants={{
          hidden: { opacity: 0, x: 100, filter: "blur(4px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="mb-8 space-y-6">
          <p className="border rounded-full sm:font-bold sm:text-[14px] sm:w-full w-fit px-6 py-2 mb-6">
            Deepen Your Islamic Knowledge
          </p>
          <h3 className="text-5xl sm:text-3xl font mb-4 font-serif leading-tight">
            Learn the Quran and Sunnah Online
          </h3>
          <p className="text-md text-gray-600 leading-relaxed">
            Whether you&lsquo;re a beginner or looking to enhance your existing
            knowledge, we offer a variety of resources to help you on your
            journey.
          </p>
          <div>
            <p className="font-serif text-[#8B99A1]">Why Start Today?</p>
            <ul className="space-y-4 pt-4 ">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-[#556A76] font-normal"
                >
                  <Image
                    src={feature.icon}
                    alt="Feature Icon"
                    width={24}
                    height={24}
                  />
                  <p>{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
          {/* <Button text="Start Now" /> */}
          <NewButton text="Start Now" className="bg-black" />
        </div>
      </InView>
    </section>
  );
}
