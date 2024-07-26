import Image from "next/image";
import React from "react";
import hadith from "../../public/assets/had.svg";
import quran from "../../public/assets/qur.svg";
import fiqh from "../../public/assets/fiqh.svg";
import arabic from "../../public/assets/arabic.svg";

const SUBJECT = [
  { id: 1, icon: hadith, title: "Hadith" },
  { id: 2, icon: quran, title: "Quran" },
  { id: 3, icon: fiqh, title: "Fiqh" },
  { id: 4, icon: arabic, title: "Arabic" },
];

export const Subjectcard = () => {
  return (
    <section className="grid grid-cols-4 gap-6">
      {SUBJECT.map(({ id, icon, title }) => (
        <div key={id} className="p-8 border-2 rounded-md ">
          <Image src={icon} alt={title} className="mb-8" />
          <div>
            <p>{title}</p>
            <p>Trade vol (7d)</p>
          </div>
        </div>
      ))}
    </section>
  );
};
