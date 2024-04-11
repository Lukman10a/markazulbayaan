import Image from "next/image";
import React from "react";
import { Button } from "./button";

export const Learn = () => {
  return (
    <section className="flex items-center p-10 px-32 ">
      <div className="space-y-4 flex-grow">
        <h1 className="font-bold text-4xl space-y-5 text-yellow-700">
          Discover the
          <br /> Essence of learning <br /> the Deen
        </h1>
        <p>
          Whether you&apos;re a beginner seeking to grasp the <br />
          fundamentals or an advanced learner striving <br />
          for mastery, our expert educators are dedicated <br /> to guiding you
          every step of the way.
        </p>
        <Button />
      </div>
      <Image
        src={require("../../public/hero.png")}
        alt="hero"
        className="flex-grow w-90"
      />
    </section>
  );
};
