import React from "react";
import { Hero } from "../hero";
import { Subjectcard } from "../subjectcard";
import Image from "next/image";
import heroImage from "../../../public/assets/reading.jpg";
import journeyBg from "../../../public/assets/journey_bg.png";
import quran from "../../../public/assets/quran.svg";
import volume from "../../../public/assets/volume.svg";
import moon from "../../../public/assets/moon.svg";
import Button from "../button";

export default function HomePage() {
  return (
    <section>
      <Hero />

      <div className="p-[2vmin] mt-[3vmin]">
        <div className="md:text-center space-y-6 ">
          <h1 className="text-[#760808] text-[7vmin] sm:text-[6vmin] font-bold px-[25px] leading-tight">
            A Platform to learn the Qur’an & Sunnah
          </h1>
          <p className="font-medium sm:text-[2.5vmin] lg:px-[22vw] px-[25px] text-[3.5vmin] text-[#420404]">
            Learn the proper recitation of the Quran (Tajweed) and delve into
            the teachings and practices of Prophet Muhammad (PBUH) as found in
            the Sunnah.
          </p>
        </div>
        <div className="sm:flex gap-[10vw] items-center justify-center px-10 p-10 ">
          <div className=" text-center  flex sm:block ">
            <Image src={quran} alt="" className="items-center w-[15vmin]" />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[5vmin]">
                $462B
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Supported
              </p>
            </div>
          </div>

          <div className=" text-center  flex sm:block ">
            <Image src={volume} alt="" className="items-center w-[15vmin]" />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[5vmin]">
                50,000+
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Volume traded
              </p>
            </div>
          </div>

          <div className=" text-center  flex sm:block ">
            <Image src={moon} alt="" className="items-center w-[15vmin]" />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[4vmin]">
                29m+
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Verified traders
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 lg:px-[6vw]">
        <section className="md:flex items-center md:py-[7vmax] rounded-3xl bg-custom-gradient md:gap-10">
          <div className="flex-grow space-y-10 mb-10  md:w-1/2 h-full">
            <h1 className="font-bold text-[4vmax] text-[#CD9418] leading-none">
              Discover the Essence of learning the Deen
            </h1>
            <p className="font-medium text-lg text-[#420404]">
              Whether you&apos;re a beginner seeking to grasp the fundamentals
              or an advanced learner striving for mastery, our expert educators
              are dedicated to guiding you every step of the way.
            </p>
            <Button text="Start Now" />
          </div>
          <Image
            src={heroImage}
            alt="hero"
            className=" md:w-1/2 rounded-[10px] overflow-hidden "
          />
        </section>
      </div>

      <div className=" space-y-2   px-10  lg:px-[6vw] ">
        <h1 className="font-bold text-[4vmax] lg:text-[3vmax] text-[#CD9418]">
          What we offer
        </h1>
        <p className="text-[#420404] font-medium text-lg">
          At Markazul-Bayan, we provide access to a wealth of resources,
          including authentic texts, multimedia materials, and interactive
          sessions, fostering an environment conducive to holistic learning.
        </p>
      </div>
      <div className="px-10 lg:px-[6vw] bg-gradient-to-t from-gray-50 via-gray-100 to-white">
        <Subjectcard />
      </div>

      <div className=" max-h-[600px] h-[100vmin] w-[100%] flex justify-center items-center ">
        <div className="relative px-[10vw] md:px-[5vw] py-[8vmin] bg-[url('../../public/assets/journey_bg.png')] sm:bg-[url('../../public/assets/journey_bg2.png')] bg-top object-cover bg-cover w-[95%] md:w-[85%] lg:w-[80%] h-full rounded-[20px] md:rounded-[50px]">
          <h1 className="text-[8vmin] text-white md:text-[8vmin] lg:text-[9vmin] font-bold mb-[3.5vmin] leading-tight tracking-tight w-[90%]  ">
            Embark on
            <br /> Your Journey
            <br /> Today
          </h1>
          <p className="text-[3vmin]  text-white sm:text-[2vmin] font-medium leading-normal w-[100%] md:w-[50%] xl:w-[35%] bg-[#352605a8] p-4 ">
            Step into a sanctuary of learning where tradition meets modernity.
            Our esteemed institution offers a comprehensive curriculum designed
            to nurture a deep understanding of Islamic principles and values.
          </p>
          <div className="my-[2.5vmin] md:absolute bottom-[20px] right-[50px]">
            <Button text="Start now" />
          </div>
        </div>
      </div>
    </section>
  );
}
