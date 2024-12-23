import React from "react";
import Button from "./button";
import Link from "next/link";
import { InView } from "./ui/animated/in-view";

export const Hero = () => {
  return (
    <section className="bg-[url(/assets/blog3.png)] bg-center object-cover bg-cover overflow-hidden py-10">
      <div className="px-[5vw] text-white top-[10vmin] lg:top-[7vmax]">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
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
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, x: -50, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="text-[3vmin] xl:text-[3vmin] sm:text-[2vmin] font-medium leading-normal w-[90%] xl:w-[80%]">
            At Markazul Bayaan, we guide you on a transformative journey to
            deepen your understanding of the Arabic language, explore the rich
            teachings of the Qur&apos;an and Sunnah, and immerse yourself in the
            core principles of Islamic monotheism. Whether you&apos;re
            perfecting your Tajweed, studying Hadith, or learning the essentials
            of Fiqh, our platform offers a comprehensive Islamic education that
            enriches both mind and soul.
          </p>
        </InView>
        <div className="my-[2.5vmin]">
          <Link href="/contact">
            <Button text="Contact us" />
          </Link>
        </div>
      </div>
    </section>
  );
};
