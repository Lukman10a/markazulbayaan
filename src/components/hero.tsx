import React from "react";
import Button from "./button";
import Link from "next/link";
import { InView } from "./ui/animated/in-view";

export const Hero = () => {
  return (
    <section className="bg-[url(/assets/home_hero.png)] bg-center object-cover bg-cover overflow-hidden h-[800px] flex p-10">
      <div className="text-white self-end space-y-4">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-8xl font-serif lg:text-7xl md:text-5xl sm:text-4xl">
            The Pursuit of <br /> Knowledge: A Duty for <br /> Every Muslim
          </h1>
        </InView>
        <InView
          variants={{
            hidden: { opacity: 0, x: -90, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="text-[#8B99A1] font-inter sm:text-sm">
            At Markazul Bayaan, we guide you on a transformative journey to
            deepen your understanding of <br /> the Arabic language, explore the
            rich teachings of the Qur&apos;an and Sunnah, and immerse yourself{" "}
            <br /> in the core principles of Islamic monotheism.
          </p>
        </InView>
        <div className="">
          <Link href="/contact">
            <Button text="Contact us" />
          </Link>
        </div>
      </div>
    </section>
  );
};
