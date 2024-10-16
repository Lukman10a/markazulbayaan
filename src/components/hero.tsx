import Image from "next/image";
import React from "react";
import blog3 from "../../public/assets/blog3.png";
import Button from "./button";
import Link from "next/link";

export const Hero = () => {
  return (
    <>
      <section className="bg-[url(/assets/blog3.png)] bg-cover overflow-hidden py-10">
        <div className="px-[5vw] text-white top-[10vmin] lg:top-[7vmax]">
          <h1
            style={{
              color: "transparent",
              textShadow: "0px 2px 1px #F8E7C5",
              backgroundClip: "text",
              backgroundColor: "#565656",
            }}
            className="text-[8vmin] md:text-[8vmin] lg:text-[9vmin] font-extrabold mb-[3.5vmin] w-[90%]"
          >
            The Pursuit of Knowledge: A Duty for Every Muslim
          </h1>
          <p className="text-[3vmin] xl:text-[3vmin] sm:text-[2vmin] font-medium leading-normal w-[90%] xl:w-[80%]">
            At Markazul Bayaan, we guide you on a transformative journey to
            deepen your understanding of the Arabic language, explore the rich
            teachings of the Qur&apos;an and Sunnah, and immerse yourself in the
            core principles of Islamic monotheism. Whether you&apos;re
            perfecting your Tajweed, studying Hadith, or learning the essentials
            of Fiqh, our platform offers a comprehensive Islamic education that
            enriches both mind and soul.
          </p>
          <div className="my-[2.5vmin]">
            <Link href="/contact">
              <Button text="Contact us" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
