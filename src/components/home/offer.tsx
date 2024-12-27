import React from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";
// import discover_bg from "../../../public/assets/discover_bg.jpeg";

export default function Offer() {
  return (
    <div>
      <section className="space-y-2 px-10 lg:px-[6vw]">
        <h1 className="font-bold text-[4vmax] lg:text-[3vmax] text-[#CD9418]">
          What we offer
        </h1>
        <p className="text-[3vmin] md:text-lg leading-relaxed font-medium">
          At Markazul-Bayan, we provide access to a wealth of resources,
          including authentic texts, multimedia materials, and interactive
          sessions, fostering an environment conducive to holistic learning.
        </p>
      </section>

      <div className="px-10 lg:px-[6vw] bg-gradient-to-t from-gray-50 via-gray-100 to-white">
        <SubjectCard />
      </div>

      <div className=" max-h-[600px] h-[100vmin] w-[100%] flex justify-center items-center ">
        <div className="relative px-[10vw] md:px-[5vw] py-[8vmin] bg-[url('../../public/assets/discover_bg.jpeg')] object-cover bg-cover w-[95%] md:w-[85%] lg:w-[80%] rounded-3xl md:rounded-[50px]">
          <h1 className="text-[8vmin]  md:text-[8vmin] lg:text-[9vmin] font-bold mb-[3.5vmin] leading-tight tracking-tight w-[90%]  ">
            Embark on
            <br /> Your Journey
            <br /> Today
          </h1>
          <p className="font-semibold text-xl">
            Step into a sanctuary of learning where tradition meets modernity.
            Our esteemed institution offers a comprehensive curriculum designed
            to nurture a deep understanding of Islamic principles and values.
          </p>
          <Link href={"https://bit.ly/Learn-at-markazbayan"}>
            <div className="">
              <Button text="Start now" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
