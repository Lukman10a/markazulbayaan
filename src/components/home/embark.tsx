import React from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";
// import discover_bg from "../../../public/assets/discover_bg.jpeg";

export default function Embark() {
  return (
    <div className="text-white bg-[url(/assets/embark.png)] flex justify-center items-center text-center flex-col p-20 md:p-10 sm:p-6 space-y-10 sm:py-20">
      <h1 className=" text-8xl md:text-5xl sm:text-4xl font-serif">
        Embark on
        <br /> Your Journey
        <br /> Today
      </h1>
      <p className="sm:text-sm">
        Step into a sanctuary of learning where tradition meets modernity. Our
        <br />
        esteemed institution offers a comprehensive curriculum designed to
        nurture <br /> a deep understanding of Islamic principles and values.
      </p>
      <Link href={"https://bit.ly/Learn-at-markazbayan"}>
        <div className="">
          <Button text="Start now" />
        </div>
      </Link>
    </div>
  );
}
