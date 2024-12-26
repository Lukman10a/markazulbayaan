import React from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";

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
        <div className="relative px-[10vw] md:px-[5vw] py-[8vmin] bg-[url('../../public/assets/journey_bg.png')] sm:bg-[url('../../public/assets/journey_bg2.png')] bg-top object-cover bg-cover w-[95%] md:w-[85%] lg:w-[80%] h-full rounded-[20px] md:rounded-[50px]">
          <h1 className="text-[8vmin] text-white md:text-[8vmin] lg:text-[9vmin] font-bold mb-[3.5vmin] leading-tight tracking-tight w-[90%]  ">
            Embark on
            <br /> Your Journey
            <br /> Today
          </h1>
          <p className="text-[3vmin]  text-white sm:text-[2vmin] leading-relaxed font-medium w-[100%] md:w-[50%] xl:w-[35%] bg-[#352605a8] p-4 ">
            Step into a sanctuary of learning where tradition meets modernity.
            Our esteemed institution offers a comprehensive curriculum designed
            to nurture a deep understanding of Islamic principles and values.
          </p>
          <Link href={"https://bit.ly/Learn-at-markazbayan"}>
            <div className="my-[2.5vmin] md:absolute bottom-[20px] right-[50px]">
              <Button text="Start now" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
