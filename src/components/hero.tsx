import React from "react";
import Button from "./button";
import Link from "next/link";
import { InView } from "./ui/animated/in-view";

export const Hero = () => {
  return (
    <section className="bg-[url(/assets/home_hero.png)] bg-center object-cover bg-cover overflow-hidden">
      <div className="text-white">
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-[8vmin] md:text-[8vmin] lg:text-[9vmin] font-extrabold mb-[3.5vmin] w-[90%]">
            Welcome to Markazul-Bayan
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
            Your Premier Destination for Arabic, Quranic Studies, and Islamic
            Monotheism
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
