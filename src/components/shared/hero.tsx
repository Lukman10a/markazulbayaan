import React from "react";
// import Button from "../button";
import Link from "next/link";
import { InView } from "../ui/animated/in-view";
import NewButton from "../ui/newButton";

interface HeroProps {
  bgImage: string;
  heading: string[]; // Array of strings for multiple lines
  description: string[]; // Array of strings for multiple lines
  buttonText: string;
  buttonLink: string;
}

export const Hero: React.FC<HeroProps> = ({
  bgImage,
  heading,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section
      className="bg-center object-cover bg-cover overflow-hidden h-[600px] flex p-10"
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="text-white self-end space-y-4">
        {/* Heading */}
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-8xl font-serif lg:text-7xl md:text-5xl sm:text-4xl">
            {heading.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
        </InView>

        {/* Description */}
        <InView
          variants={{
            hidden: { opacity: 0, x: -90, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p className="text-[#8B99A1] font-inter sm:text-sm">
            {description.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </InView>

        {/* Button */}
        <div>
          <Link href={buttonLink}>
            {/* <Button text={buttonText} /> */}
            <NewButton />
          </Link>
        </div>
      </div>
    </section>
  );
};
