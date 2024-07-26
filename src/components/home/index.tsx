import React from "react";
import { Navbar } from "../navbar";
import { Hero } from "../hero";
import { Subjectcard } from "../subjectcard";
import Image from "next/image";
import { Button } from "../button";
import heroImage from "../../../public/assets/hero.png";
import journeyBg from "../../../public/assets/journey_bg.png";

export default function HomePage() {
  return (
    <section>
      <Navbar />
      <Hero />

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

      <div className="absolute">
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
        <div className="flex justify-between p-20 relative bottom-[600px]">
          <div className="space-y-16">
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
          <div className="self-end">
            <Button text="Start now" />
          </div>
        </div>
      </div>
    </section>
  );
}
