import Image from "next/image";
import React from "react";
import { Button } from "./button";

export const Hero = () => {
  return (
    <div className="p-10 ">
      <div className="relative">
        <Image src={require("../../public/hero_bg.png")} alt="hero_bg" />
        {/* </div> */}
        <div className="px-20 space-y-10 text-white absolute top-28">
          <h1 className="text-6xl font-bold">
            Seeking Knowledge
            <br /> is a duty of all Muslims
          </h1>
          <p>
            Unlock the beauty of the Arabic language, delve into the profound
            teachings of the Quran and <br /> Sunnah, and immerse yourself in
            the rich tapestry of Islamic monotheism at Markazul-Bayan.
          </p>
          <Button text="Contact us" />
        </div>
      </div>
    </div>
  );
};
