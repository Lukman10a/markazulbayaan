import Image from "next/image";
import React from "react";

interface ButtonProps {
  text?: string; // The button text, optional
  iconSrc?: string; // The source of the icon image, optional
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="flex justify-center items-center gap-4 rounded-md bg-[#E8B33F] p-4 w-36 text-white">
      <p>{text}</p>
      <Image src={require("../../public/assets/arrow.png")} alt="arrow" />
    </button>
  );
};

// {iconSrc && <Image src={iconSrc} alt="icon" width={20} height={20} />}
