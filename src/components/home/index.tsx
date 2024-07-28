import React from "react";
import { Navbar } from "../navbar";
import { Hero } from "../hero";
import { Subjectcard } from "../subjectcard";
import Image from "next/image";
import { Button } from "../button";
import heroImage from "../../../public/assets/hero.png";
import journeyBg from "../../../public/assets/journey_bg.png";
import quran from "../../../public/assets/quran.svg";
import volume from "../../../public/assets/volume.svg";
// import verified from "../../../public/assets/verified.svg";

export default function HomePage() {
  return (
    <section>
      <Hero />

      <div className="p-20">
        <div className="text-center space-y-6">
          <h1 className="text-[#760808] text-5xl font-bold">
            A Platform to learn the Qur’an & Sunnah
          </h1>
          <p className="font-medium text-xl px-44">
            Learn the proper recitation of the Quran (Tajweed) and delve into
            the teachings and practices of Prophet Muhammad (PBUH) as found in
            the Sunnah.
          </p>
        </div>
        <div className="flex justify-between px-24 p-10">
          <div className=" text-center">
            <Image src={quran} alt="" />
            <div className="mt-6 space-y-2">
              <p className="text-[#E8B33F] font-bold text-4xl">$462B</p>
              <p className="text-[#3F2E07]">Supported</p>
            </div>
          </div>

          <div className=" text-center">
            <Image src={volume} alt="" />
            <div className="mt-6 space-y-2">
              <p className="text-[#E8B33F] font-bold text-4xl">$462B</p>
              <p className="text-[#3F2E07]">Supported</p>
            </div>
          </div>

          <div className=" text-center">
            <Image src={quran} alt="" />
            <div className="mt-6 space-y-2">
              <p className="text-[#E8B33F] font-bold text-4xl">$462B</p>
              <p className="text-[#3F2E07]">Supported</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <section className="flex items-center p-10 rounded-3xl bg-custom-gradient">
          <div className="flex-grow space-y-10">
            <h1 className="font-bold text-4xl text-yellow-700">
              Discover the Essence of learning the Deen
            </h1>
            <p className="font-medium text-lg">
              Whether you&apos;re a beginner seeking to grasp the <br />
              fundamentals or an advanced learner striving <br />
              for mastery, our expert educators are dedicated <br /> to guiding
              you every step of the way.
            </p>
            <Button text="Start Now" />
          </div>
          <Image src={heroImage} alt="hero" className="" />
        </section>
      </div>

      <div className="p-20 space-y-6">
        <h1 className="font-bold text-4xl text-yellow-700">What we offer</h1>
        <p className="text-[#3F2E07] font-medium text-xl">
          At Markazul-Bayan, we provide access to a wealth of resources,
          including authentic texts, multimedia materials, and interactive
          sessions, fostering an environment conducive to holistic learning.
        </p>
        <Subjectcard />
      </div>

      <div className="relative p-20">
        <Image
          src={journeyBg}
          alt="journey"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            // height: "550px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "100px",
            overflow: "hidden",
            padding: "20px",
          }}
        />
        <div className=" p-20 absolute bottom-[100px]">
          <div className="space-y-16 relative">
            <h1 className="font-bold text-6xl text-white">
              Embark on <br /> Your Journey <br /> Today
            </h1>
            <p className="bg-[#352605BA] font-medium text-white p-4">
              Step into a sanctuary of learning where <br /> tradition meets
              modernity. Our esteemed <br /> institution offers a comprehensive
              <br />
              curriculum designed to nurture a deep <br /> understanding of
              Islamic principles and values.
            </p>
          </div>
        </div>
        <div className="absolute right-44 bottom-44">
          <Button text="Start now" />
        </div>
      </div>
    </section>
  );
}
