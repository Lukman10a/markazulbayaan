import Image from "next/image";
import React from "react";

export const Button = () => {
  return (
    <div className="flex justify-center items-center gap-4 rounded-md bg-yellow-700 p-4 w-36 text-white">
      <Image src={require("../../public/arrow.png")} alt="arrow" />
      <p>Start now</p>
    </div>
  );
};
