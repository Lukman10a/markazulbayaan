import Image from "next/image";
import React from "react";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import markaz from "../../public/assets/markaz.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgb(46,33,1)] text-white py-16">
      <div className=" mx-auto px-[8vw]">
        {/* Flexbox container that switches layout from column (mobile) to row (desktop) */}
        <div className="flex flex-col space-y-6 md:flex-row  md:justify-between mb-6 border-b-2 border-[#8080803a]">
          {/* Logo and Tagline: Centered on mobile, aligned left on larger screens */}
          <div className="flex flex-col md:text-left md:items-start mb-6 md:mb-12 ">
            <div className="flex items-center">
              <Image
                src={markaz}
                alt="Logo"
                className=" mr-4 w-auto h-[58px] mb-4"
                width={500}
                height={400}
              />{" "}
            </div>
            <p className="text-sm w-[70%] font-semibold">
              Welcome to Markazul-Bayan: Your Gateway to Islamic Knowledge
            </p>
          </div>

          {/* Navigation Links: Stacked on mobile, aligned horizontally on larger screens */}
          <nav className="flex flex-col gap-[2.2vmax] md:gap-[3vmax] md:flex-row pb-12">
            <Link href="/" className="hover:text-gray-400 self-start mb-2">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400 self-start mb-2">
              About us
            </Link>
            <Link href="/faq" className="hover:text-gray-400 self-start mb-2">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-gray-400 self-start mb-2">
              Blog
            </Link>
            <Link
              href="/reviews"
              className="hover:text-gray-400 self-start mb-2"
            >
              Review
            </Link>
            <Link
              href="/course"
              className="hover:text-gray-400 self-start mb-2"
            >
              Courses
            </Link>
          </nav>
        </div>
        {/* Social Media Icons: Centered on mobile, spaced horizontally on larger screens */}
        <div className="flex gap-4 md:justify-center">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
          >
            <FaGoogle size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
