import Image from "next/image";
import React from "react";
import finer from "../../../public/assets/finer.png";
import personalize from "../../../public/assets/personalize.png";
import soty from "../../../public/assets/soty.png";
import lamp from "../../../public/assets/lamp.png";

export default function Learn() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:space-x-6 p-8 max-w-[80vw] mx-auto gap-10">
      {/* Left Side: Text Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 space-y-6 ">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Learn the Quran and Sunnah Online
        </h1>
        <h2 className="text-md font-semibold mb-6">
          Deepen Your Islamic Knowledge
        </h2>
        <p className="text-md text-gray-600 leading-relaxed font-medium">
          Whether you&lsquo;re a beginner or looking to enhance your existing
          knowledge, we offer a variety of resources to help you on your
          journey.
        </p>
      </div>

      {/* Right Side: Image and Popup Section */}
      <div className="relative md:w-1/2 w-full">
        {/* Main Image */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-5">
          <Image
            src={lamp} // Make sure to add the correct image path here
            alt="Islamic Knowledge Image"
            width={500}
            height={400}
            className="w-full h-auto" // This will make the image fill the width on mobile and adjust height proportionally
          />
        </div>

        {/* Popup Card */}
        <div className="absolute bottom-12 left-6 md:-left-8 bg-white p-4 rounded-lg shadow-lg border-2 border-yellow-500 w-64">
          <h3 className="text-lg font-semibold mb-2">Why Start Today?</h3>
          <ul className="text-gray-600">
            <div className="flex gap-2 mb-3">
              <div className="bg-[#EF5A3B] p-2 rounded-full self-start">
                <Image
                  src={finer} // Make sure to add the correct image path here
                  alt="Qualified Instructors Icon"
                  width={50}
                  height={50}
                  className="w-8 h-8" // Define size explicitly for smaller screens
                />
              </div>
              <p className="text-[14px]">
                Learn from qualified instructors with deep expertise
              </p>
            </div>
            <div className="flex gap-2 mb-3">
              <div className="bg-[#EFBD31] p-2 rounded-full self-start">
                <Image
                  src={personalize} // Make sure to add the correct image path here
                  alt="Flexible Study Plan Icon"
                  width={50}
                  height={50}
                  className="w-8 h-8" // Explicit size for better scaling
                />
              </div>
              <p className="text-[14px]">
                Tailored study plans that suit your pace
              </p>
            </div>
            <div className="flex gap-2 mb-3">
              <div className="bg-[#37AA54] p-2 rounded-full self-start">
                <Image
                  src={soty} // Make sure to add the correct image path here
                  alt="Community Support Icon"
                  width={50}
                  height={50}
                  className="w-8 h-8" // Explicit size for better scaling
                />
              </div>
              <p className="text-[14px]">
                Join a vibrant community to support your journey
              </p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
