import Image from "next/image";
import React from "react";
import hadith from "../../public/assets/had.svg";
import quran from "../../public/assets/qur.svg";
import fiqh from "../../public/assets/fiqh.svg";
import arabic from "../../public/assets/arabic.svg";

const SUBJECT = [
  { id: 1, icon: quran, title: " Quran" },
  { id: 2, icon: hadith, title: "Hadith" },
  { id: 3, icon: fiqh, title: "Fiqh" },
  { id: 4, icon: arabic, title: "Arabic" },
];

export const Subjectcard = () => {
  return (
    <section className=" py-16 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-[2vw]  md:gap-[4vw] sm:px-[5vw] justify-center items-center ">
      {SUBJECT.map(({ id, icon, title }) => (
        <div
          key={id}
          className="text-center p-[6vmin]  rounded-md bg-white shadow-md ">
          <div className="p-3 bg-[#E8B33F]  mb-6 mx-[auto] inline-block rounded-full">
            <Image src={icon} alt={title} className="w-6 h-6 " />
          </div>
          <div>
            <h1 className="text-[#760808] text-[4vmin] font-bold  leading-tight mb-1">
              {title}
            </h1>
            <p>Trade vol (7d)</p>
          </div>
        </div>
      ))}
    </section>
  );
};
