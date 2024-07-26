import Image from "next/image";
import React from "react";
import { Button } from "./button";
import heroImg from "../../public/assets/hero_bg.png";

export const Hero = () => {
  return (
    <div className="p-10 ">
      <div className="relative">
        <Image
          src={heroImg}
          alt="hero_bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        />
        <div className="px-20 space-y-10 text-white absolute top-36">
          <h1 className="text-7xl font-bold">
            Seeking Knowledge
            <br /> is a duty of all Muslims
          </h1>
          <p className="text-lg font-medium">
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
