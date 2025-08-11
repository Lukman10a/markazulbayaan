import React from "react";
import Link from "next/link";
import { InView } from "../ui/animated/in-view";
import NewButton from "../ui/newButton";
import { useTheme } from "@/lib/theme-context";

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
  const { theme } = useTheme();

  return (
    <section
      className={`bg-center object-cover bg-cover h-[600px] flex p-10 relative ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-black/70' 
          : 'bg-black/40'
      }`}></div>
      
      <div className="text-white self-end space-y-4 overflow-hidden relative z-10">
        {/* Heading */}
        <InView
          variants={{
            hidden: { opacity: 0, x: -100, filter: "blur(4px)" },
            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -200px 0px" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className={`text-8xl font-serif lg:text-7xl md:text-5xl sm:text-4xl ${
            theme === 'dark' ? 'text-white' : 'text-white'
          }`}>
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
          <p className={`font-inter sm:text-sm ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-100'
          }`}>
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
            <NewButton text="Explore" />
          </Link>
        </div>
      </div>
    </section>
  );
};
