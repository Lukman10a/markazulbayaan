import Image from "next/image";
import React from "react";
import { InView } from "../ui/animated/in-view";
import heroImage from "../../../public/assets/reading.jpg";
import Button from "../button";
import Link from "next/link";

export default function Discover() {
  return (
    <section className="p-16 bg-home-gradient  overflow-hidden">
      <section className="md:flex items-center md:py-[7vmax] rounded-3xl md:gap-10">
        <div className="flex-grow overflow-hidden space-y-10 mb-10  md:w-1/2 h-full">
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h3 className="font-bold text-[4vmax] leading-none">
              Discover the Essence of learning the Deen
            </h3>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="font-medium text-[3vmin] md:text-lg leading-relaxed">
              Whether you&apos;re a beginner seeking to grasp the fundamentals
              or an advanced learner striving for mastery, our expert educators
              are dedicated to guiding you every step of the way.
            </p>
          </InView>
          <InView
            variants={{
              hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
            }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Link href="/contact">
              <Button text="Start Now" />
            </Link>
          </InView>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div>
            <Image
              src={heroImage}
              alt="hero"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </InView>
      </section>
    </section>
  );
}
