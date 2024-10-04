import React from "react";
import { Hero } from "../hero";
import { Subjectcard } from "../subjectcard";
import Image from "next/image";
import heroImage from "../../../public/assets/reading.jpg";
import journeyBg from "../../../public/assets/journey_bg.png";
import lamp from "../../../public/assets/lamp.png";
import quran from "../../../public/assets/quran.svg";
import volume from "../../../public/assets/volume.svg";
import moon from "../../../public/assets/moon.svg";
import Button from "../button";
import Testimonials from "../testimonial";
import CommunityCard from "../CommityCard";
import finer from "../../../public/assets/finer.png";
import personalize from "../../../public/assets/personalize.png";
import soty from "../../../public/assets/soty.png";
import Navbar from "../Nav";

interface CommunityCardData {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  link: string;
}

const communityCardDataArray: CommunityCardData[] = [
  {
    title: "Discretionary Cover",
    description:
      "Smart Contract Cover is not a contract of insurance. Fellow members will decide on claims. Claims payments are enforced by token-driven economic incentives rather than placing trust in an insurance company.",
    imageSrc: "/assets/discretionary.png", // Replace with the actual image path
    altText: "Discretionary Cover Icon",
    link: "#",
  },
  {
    title: "Legal Backing",
    description:
      "When joining the mutual, you become a legal member of a UK company. Your membership rights will be backed by legal agreements. All members will have legal rights to the pool of funds, placing trust in an insurance company.",
    imageSrc: "/assets/legal.png", // Replace with the actual image path
    altText: "Legal Backing Icon",
    link: "#",
  },
  {
    title: "Membership",
    description:
      "Membership rights are represented by tokens. Tokens can be used to purchase cover and participate in claims assessment, underwriting, and member governance. All funds raised from token purchases belong to members.",
    imageSrc: "/assets/Membership.png", // Replace with the actual image path
    altText: "Membership Icon",
    link: "#",
  },
];

export default function HomePage() {
  return (
    <section>
      <Hero />
      <div className="px-10 pt-4 md:py-10">
        <div className="md:text-center sm:space-y-6 space-y-4 ">
          <h1 className="text-[#760808] text-[6.5vmin] md:text-5xl font-bold leading-tight ">
            A Platform to learn the Qur’an & Sunnah
          </h1>
          <p className="sm:text-[2.5vmin] lg:px-[22vw]  text-[3vmin] leading-relaxed font-medium">
            Learn the proper recitation of the Quran (Tajweed) and delve into
            the teachings and practices of Prophet Muhammad (PBUH) as found in
            the Sunnah.
          </p>
        </div>
        <div className="sm:flex gap-[10vw] items-center md:justify-center px-1  p-10 ">
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
      </div>
      <div className=" space-y-2   px-10  lg:px-[6vw] ">
        <h1 className="font-bold text-[4vmax] lg:text-[3vmax] text-[#CD9418]">
          What we offer
        </h1>
        <p className="text-[3vmin] md:text-lg leading-relaxed font-medium">
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
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 p-8 max-w-[1000px] mx-auto gap-6 ">
        {/* Left Side: Text Section */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 space-y-6 ">
          <h1 className="text-[5.5vmin] font-semibold text-[#760808] mb-4 leading-tight">
            Learn the Quran and Sunnah Online
          </h1>
          <h2 className="text-md font-semibold text-[#760808] mb-6">
            Deepen Your Islamic Knowledge
          </h2>
          <p className="text-md text-gray-600 leading-relaxed font-medium">
            Whether you're a beginner or looking to enhance your existing
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
            <h3 className="text-lg font-semibold mb-2">Smoker Cessation</h3>
            <ul className="text-gray-600">
              <div className="flex gap-2 mb-3">
                <div className="bg-[#EF5A3B] p-2 rounded-full self-start">
                  <Image
                    src={finer} // Make sure to add the correct image path here
                    alt="Finer Icon"
                    width={50}
                    height={50}
                    layout="intrinsic" // Intrinsic layout for consistent sizing
                    className="w-8 h-8" // Define size explicitly for smaller screens
                  />
                </div>
                <p className="text-[14px]">
                  Face-to-face with an online doctor visit
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <div className="bg-[#EFBD31] p-2 rounded-full self-start">
                  <Image
                    src={personalize} // Make sure to add the correct image path here
                    alt="Personalized Plan Icon"
                    width={50}
                    height={50}
                    layout="intrinsic"
                    className="w-8 h-8" // Explicit size for better scaling
                  />
                </div>
                <p className="text-[14px]">Your personalized plan treatment</p>
              </div>
              <div className="flex gap-2 mb-3">
                <div className="bg-[#37AA54] p-2 rounded-full self-start">
                  <Image
                    src={soty} // Make sure to add the correct image path here
                    alt="Quitting Journey Icon"
                    width={50}
                    height={50}
                    layout="intrinsic"
                    className="w-8 h-8" // Explicit size for better scaling
                  />
                </div>
                <p className="text-[14px]">
                  Start your quitting story & journey
                </p>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-16 xl:mx-[5vw] xl:rounded-lg px-[5vw]">
        <div className=" mx-auto text-center">
          {/* Header Section */}
          <h2 className="text-white text-xl font-normal mb-2">
            RUN BY MEMBERS
          </h2>
          <h1 className="text-[6.5vmin] text-white font-semibold mb-4">
            Join our Community of Islamic Learners
          </h1>
          <p className="text-white text-[16px]  mb-12 lg:w-[50%] mx-auto">
            No insurance company. Nexus Mutual is run entirely by its members.
            Only members can decide which claims are valid.
          </p>

          {/* Card Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-[80%] sm:w-[70%] md:w-[50%] lg:w-[100%] mx-auto">
            {/* Map over the cardDataArray to generate the Card components */}
            {communityCardDataArray.map((communityCardData, index) => (
              <CommunityCard
                key={index}
                title={communityCardData.title}
                description={communityCardData.description}
                imageSrc={communityCardData.imageSrc}
                altText={communityCardData.altText}
                link={communityCardData.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
