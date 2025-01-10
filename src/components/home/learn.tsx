import Image from "next/image";
import React from "react";
import learn from "../../../public/assets/learn.png";
import Button from "../button";

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
    <div className="flex flex-col py-20 md:flex-row justify-between items-center md:space-x-6 p-8 max-w-[80vw] mx-auto gap-10">
      <div className="rounded-lg overflow-hidden shadow-lg mb-5">
        <Image
          src={learn}
          alt="Islamic Knowledge Image"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 space-y-4 ">
        <p className="border rounded-full w-fit px-6 py-2 mb-6">
          Deepen Your Islamic Knowledge
        </p>
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Learn the Quran and Sunnah Online
        </h1>
        <p className="text-md text-gray-600 leading-relaxed font-medium">
          Whether you&lsquo;re a beginner or looking to enhance your existing
          knowledge, we offer a variety of resources to help you on your
          journey.
        </p>
        <div>
          <p>Why Start Today?</p>
          <div className="space-y-4 pt-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <Image
                  src={feature.icon}
                  alt="Feature Icon"
                  width={24}
                  height={24}
                />
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Button text="Start Now" />
      </div>
    </div>
  );
}
