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
    <section className="flex md:flex-col py-20 justify-between items-center md:space-x-6 p-8 max-w-[80vw] mx-auto gap-10">
      <div className="rounded-lg overflow-hidden shadow-lg mb-5 h-full">
        <Image
          src={learn}
          alt="Islamic Knowledge Image"
          width={500}
          height={400}
          // className="w-full h-full"
        />
      </div>

      <div className="md:w-1/2 mb-8 md:mb-0 space-y-4">
        <p className="border rounded-full w-fit px-6 py-2 mb-6">
          Deepen Your Islamic Knowledge
        </p>
        <h3 className="text-5xl font mb-4 font-serif leading-tight">
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
              <li key={index} className="flex gap-4 text-[#556A76] font-normal">
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
        <Button text="Start Now" />
      </div>
    </section>
  );
}
