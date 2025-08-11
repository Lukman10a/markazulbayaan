import React, { useState } from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";
import Typewriter from "../ui/animated/typewriter";
import NewButton from "../ui/newButton";
import { useTheme } from "@/lib/theme-context";

export default function Embark() {
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`text-white bg-[url(/assets/embark.png)] h-full flex justify-center items-center text-center flex-col p-20 md:p-10 sm:p-6 space-y-10 sm:py-20 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-black/80' 
          : 'bg-black/60'
      }`}></div>
      
      <div className="relative z-10 space-y-5">
        <h1 className="text-8xl md:text-5xl sm:text-4xl font-serif">
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
        <p className={`sm:text-sm ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-100'
        }`}>
          Step into a sanctuary of learning where tradition meets modernity. Our
          <br />
          esteemed institution offers a comprehensive curriculum designed to
          nurture <br /> a deep understanding of Islamic principles and values.
        </p>
        <Link href={"https://bit.ly/Learn-at-markazbayan"}>
          <div className=" flex justify-center items-center mt-5">
            {/* <Button text="Start now" /> */}
            <NewButton text="Start Now" />
          </div>
        </Link>
      </div>
    </div>
  );
}
