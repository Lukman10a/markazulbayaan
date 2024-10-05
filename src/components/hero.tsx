import Image from "next/image";
import React from "react";
import heroImg from "../../public/assets/hero_bg.png";
import Button from "./button";

export const Hero = () => {
  const handleClick = () => {
    console.log("Contact form submitted");
  };
  return (
    <div className="m-[3vmin] max-h-[600px] h-[100vmin] ">
      <div className="relative">
        <Image
          src={heroImg}
          alt="hero_bg"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "bottom-right",
            height: "100vmin",
            maxHeight: "600px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />

        <div className="px-[5vw] text-white absolute top-[10vmin]  lg:top-[7vmax] ">
          <h1
            style={{
              color: "transparent",
              textShadow: "0px 4px 1px #F8E7C5",
              backgroundClip: "text",
              backgroundColor: "#565656",
            }}
            className="text-[8vmin]  md:text-[8vmin] lg:text-[9vmin] font-bold mb-[3.5vmin] leading-tight tracking-tight w-[90%]  "
          >
            Seeking Knowledge
            <br /> is a duty of all Muslims
          </h1>
          <p className="text-[3vmin] sm:text-[2vmin] font-medium leading-normal w-[90%] xl:w-[60%]">
            Unlock the beauty of the Arabic language, delve into the profound
            teachings of the Quran and Sunnah, and immerse yourself in the rich
            tapestry of Islamic monotheism at Markazul-Bayan.
          </p>
          <div className="my-[2.5vmin]">
            <Button text="Contact us" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
