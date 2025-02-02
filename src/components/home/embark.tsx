import React, { useState } from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";
import Typewriter from "../ui/animated/typewriter";
import NewButton from "../ui/newButton";

export default function Embark() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  return (
    <div className="text-white bg-[url(/assets/embark.png)] h-full flex justify-center items-center text-center flex-col p-20 md:p-10 sm:p-6 space-y-10 sm:py-20">
      <h1 className=" text-8xl md:text-5xl sm:text-4xl font-serif">
        {/* First line starts immediately */}
        <Typewriter
          text={"Embark on"}
          delay={100}
          onTypingComplete={() => setShowSecond(true)}
        />
        <br />
        {/* Second line starts when first finishes */}
        {showSecond && (
          <Typewriter
            text={"Your Journey"}
            delay={100}
            onTypingComplete={() => setShowThird(true)}
          />
        )}
        <br />
        {/* Third line starts when second finishes */}
        {showThird && <Typewriter text={"Today"} delay={100} />}
      </h1>
      <p className="sm:text-sm">
        Step into a sanctuary of learning where tradition meets modernity. Our
        <br />
        esteemed institution offers a comprehensive curriculum designed to
        nurture <br /> a deep understanding of Islamic principles and values.
      </p>
      <Link href={"https://bit.ly/Learn-at-markazbayan"}>
        <div className="">
          {/* <Button text="Start now" /> */}
          <NewButton text="Start Now" />
        </div>
      </Link>
    </div>
  );
}
