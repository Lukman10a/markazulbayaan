import React from "react";
import { Hero } from "../hero";

import Image from "next/image";
import heroImage from "../../../public/assets/reading.jpg";
import lamp from "../../../public/assets/lamp.png";
import quran from "../../../public/assets/quran.svg";
import volume from "../../../public/assets/volume.svg";
import moon from "../../../public/assets/moon.svg";
import Button from "../button";
import Testimonials from "../testimonial";
import finer from "../../../public/assets/finer.png";
import personalize from "../../../public/assets/personalize.png";
import soty from "../../../public/assets/soty.png";
import Faq from "../Faq";
import { SubjectCard } from "../subjectcard";
import CommunitySection from "./CommunitySection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-10 pt-4 md:py-10">
        <div className="md:text-center sm:space-y-6 space-y-4 ">
          <h1 className="text-[#760808] text-[6.5vmin] md:text-5xl font-bold leading-tight">
            A Platform to Learn the Qur’an & Sunnah
          </h1>
          <p className="sm:text-[2.5vmin] lg:px-[22vw] text-[3vmin] leading-relaxed font-medium">
            Gain mastery in Quranic recitation (Tajweed) and immerse yourself in
            the teachings of Prophet Muhammad (PBUH), with a focus on the Sunnah
            and Islamic practices.
          </p>
        </div>

        <div className="sm:flex gap-[10vw] items-center md:justify-center px-1 p-10">
          <div className="text-center  flex sm:block">
            <Image
              src={quran}
              alt="Quran Icon"
              className="items-center w-[15vmin]"
            />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[5vmin]">
                1000+
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Quranic Lessons Delivered
              </p>
            </div>
          </div>

          <div className="text-center flex sm:block">
            <Image
              src={volume}
              alt="Tajweed Icon"
              className="items-center w-[15vmin]"
            />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[5vmin]">
                50,000+
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Hours of Learning
              </p>
            </div>
          </div>

          <div className="text-center flex sm:block">
            <Image
              src={moon}
              alt="Community Icon"
              className="items-center w-[15vmin]"
            />
            <div className="sm:mt-6 sm:space-y-2 items-center p-4 sm:p-0">
              <p className="text-[#E8B33F] font-bold text-[5vmin] md:text-[4vmin]">
                29m+
              </p>
              <p className="text-[#3F2E07] text-[2.5vmin] sm:text-[2vmin] font-medium">
                Active Learners
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-10 lg:px-[6vw]  bg-custom-gradient ">
        <section className="md:flex items-center md:py-[7vmax] rounded-3xlmd:gap-10">
          <div className="flex-grow space-y-10 mb-10  md:w-1/2 h-full">
            <h1 className="font-bold text-[4vmax] text-[#CD9418] leading-none">
              Discover the Essence of learning the Deen
            </h1>
            <p className="font-medium text-[3vmin] md:text-lg leading-relaxed">
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
      </section>
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
          <div className="my-[2.5vmin] md:absolute bottom-[20px] right-[50px]">
            <Button text="Start now" />
          </div>
        </div>
      </div>
      <Testimonials />
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 p-8 max-w-[80vw] mx-auto gap-10">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 space-y-6 ">
          <h1 className="text-[5.5vmin] font-semibold text-[#760808] mb-4 leading-tight">
            Learn the Quran and Sunnah Online
          </h1>
          <h2 className="text-md font-semibold text-[#760808] mb-6">
            Deepen Your Islamic Knowledge
          </h2>
          <p className="text-md text-gray-600 leading-relaxed font-medium">
            Whether you&lsquo;re a beginner or looking to enhance your existing
            knowledge, we offer a variety of resources to help you on your
            journey.
          </p>
        </div>

        {/* Right Side: Image and Popup Section */}
        <div className="relative md:w-1/2 w-full">
          {/* Main Image */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-5">
            <Image
              src={lamp} // Make sure to add the correct image path here
              alt="Islamic Knowledge Image"
              width={500}
              height={400}
              layout="intrinsic" // Use intrinsic to better control the image size
              className="w-full h-auto" // This will make the image fill the width on mobile and adjust height proportionally
            />
          </div>

          {/* Popup Card */}
          <div className="absolute bottom-12 left-6 md:-left-8 bg-white p-4 rounded-lg shadow-lg border-2 border-yellow-500 w-64">
            <h3 className="text-lg font-semibold mb-2">Why Start Today?</h3>
            <ul className="text-gray-600">
              <div className="flex gap-2 mb-3">
                <div className="bg-[#EF5A3B] p-2 rounded-full self-start">
                  <Image
                    src={finer} // Make sure to add the correct image path here
                    alt="Qualified Instructors Icon"
                    width={50}
                    height={50}
                    layout="intrinsic" // Intrinsic layout for consistent sizing
                    className="w-8 h-8" // Define size explicitly for smaller screens
                  />
                </div>
                <p className="text-[14px]">
                  Learn from qualified instructors with deep expertise
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <div className="bg-[#EFBD31] p-2 rounded-full self-start">
                  <Image
                    src={personalize} // Make sure to add the correct image path here
                    alt="Flexible Study Plan Icon"
                    width={50}
                    height={50}
                    layout="intrinsic"
                    className="w-8 h-8" // Explicit size for better scaling
                  />
                </div>
                <p className="text-[14px]">
                  Tailored study plans that suit your pace
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <div className="bg-[#37AA54] p-2 rounded-full self-start">
                  <Image
                    src={soty} // Make sure to add the correct image path here
                    alt="Community Support Icon"
                    width={50}
                    height={50}
                    layout="intrinsic"
                    className="w-8 h-8" // Explicit size for better scaling
                  />
                </div>
                <p className="text-[14px]">
                  Join a vibrant community to support your journey
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <CommunitySection />
      <Faq />
    </>
  );
}
