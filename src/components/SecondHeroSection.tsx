import React from "react";
import Button from "./button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <div className="relative bg-cover bg-center h-[500px] flex items-center mt-4 py-10 bg-[url(/assets/second-hero-image.png)]">
      <div className="  text-left p-6 px-6 w-full font-serif font-medium">
        <h1 className="text-white text-6xl max-w-xl sm:text-3xl  mb-4 font-serif">{title}</h1>
        <p className="text-neutral-100 text-xl sm:text-xl mb-6 max-w-lg tracking-wide">{description}</p>
        <Link href="/course">
            <Button text="Start Now" className="text-black font-semibold font-sans" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
