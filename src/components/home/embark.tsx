import React from "react";
import { SubjectCard } from "../subjectcard";
import Button from "../button";
import Link from "next/link";
// import discover_bg from "../../../public/assets/discover_bg.jpeg";

export default function Embark() {
  return (
    <div className="bg-[url(/assets/embark.png)] flex justify-center items-center text-center flex-col p-20 space-y-10">
      <h1 className="text-white text-8xl md:text-4xl sm:text-3xl">
        Embark on
        <br /> Your Journey
        <br /> Today
      </h1>
      <p className="font-semibold text-xl text-white">
        Step into a sanctuary of learning where tradition meets modernity. Our{" "}
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
