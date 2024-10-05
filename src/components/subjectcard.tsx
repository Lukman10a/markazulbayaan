import Image from "next/image";
import React from "react";
import hadith from "../../public/assets/had.svg";
import quran from "../../public/assets/qur.svg";
import fiqh from "../../public/assets/fiqh.svg";
import arabic from "../../public/assets/arabic.svg";

const SUBJECT = [
  {
    id: 1,
    icon: quran,
    title: "Quran",
    description: "Master Quranic recitation, memorization, and Tafseer.",
  },
  {
    id: 2,
    icon: hadith,
    title: "Hadith",
    description: "Learn the sayings of the Prophet Muhammad (PBUH).",
  },
  {
    id: 3,
    icon: fiqh,
    title: "Fiqh",
    description: "Understand Islamic jurisprudence and law.",
  },
  {
    id: 4,
    icon: arabic,
    title: "Arabic",
    description:
      "Gain fluency in the Arabic language, the key to understanding Islamic texts.",
  },
];

export const SubjectCard = () => {
  return (
    <section className="py-16 grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))]  gap-[2vw] md:gap-[4vw] sm:px-[5vw] justify-center items-center">
      {SUBJECT.map(({ id, icon, title, description }) => (
        <div
          key={id}
          className="text-center p-[6vmin] rounded-md bg-white shadow-md"
        >
          <div className="p-3 bg-[#e8b33f52] mb-6 mx-[auto] inline-block rounded-full">
            <Image src={icon} alt={title} className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-[#760808] text-[4vmin] font-bold leading-tight mb-1">
              {title}
            </h1>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
