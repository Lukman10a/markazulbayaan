// components/Navbar.tsx

import { useState } from "react";
import { Menu } from "@headlessui/react"; // Optional for dropdown functionality
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Using Link component for navigation
import markaz from "../../public/assets/markaz.png";
import uk from "../../public/assets/ukflag.png";
import saudi from "../../public/assets/saudiflag.png";
import dropdown from "../../public/assets/dropdown.png";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<string>("English");
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State to handle mobile menu toggle
  const [activeMobileLink, setActiveMobileLink] = useState<string>(""); // Track the active mobile link
  const [activeDesktopLink, setActiveDesktopLink] = useState<string>(""); // Track the active mobile link

  const handleDesktopLinkClick = (href: string) => {
    setActiveDesktopLink(href);
  };
  const handleMobileLinkClick = (href: string) => {
    setActiveMobileLink(href);
    setMenuOpen(false); // Close the menu after selection
  };

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center ">
          <Link href="/">
            <Image
              src={markaz}
              alt="Logo"
              className="mr-4 w-auto h-[58px] text-red-300"
              width={500}
              height={400}
            />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-yellow-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>

        {/* Nav Links for Desktop */}
        <ul className="hidden md:flex space-x-12 text-gray-700">
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/"
              onClick={() => handleDesktopLinkClick("/")}
              className={` ${
                activeDesktopLink === "/" ? " text-yellow-500" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/about"
              onClick={() => handleDesktopLinkClick("/about")}
              className={` ${
                activeDesktopLink === "/about" ? " text-yellow-500" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/#faq"
              onClick={() => handleDesktopLinkClick("/#faq")}
              className={` ${
                activeDesktopLink === "/#faq" ? " text-yellow-500" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/blog"
              onClick={() => handleDesktopLinkClick("/blog")}
              className={` ${
                activeDesktopLink === "/blog" ? " text-yellow-500" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/reviews"
              onClick={() => handleDesktopLinkClick("/reviews")}
              className={` ${
                activeDesktopLink === "/reviews" ? " text-yellow-500" : ""
              }`}
            >
              Reviews
            </Link>
          </li>
        </ul>

        {/* Language Dropdown */}
        <Menu as="div" className="relative hidden md:inline-block text-left">
          <Menu.Button className="flex items-center space-x-2 text-gray-700 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg">
            <Image
              src={`/${
                language === "English"
                  ? "assets/ukflag.png"
                  : "assets/saudiflag.png"
              }`}
              alt="Language"
              className="h-5 w-auto"
              width={500}
              height={400}
            />
            <span>{language}</span>
            <Image
              src={dropdown}
              alt="Dropdown"
              className="mr-4 w-auto"
              width={500}
              height={400}
            />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setLanguage("English")}
                    className={`flex items-center px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-100 ${
                      active && "bg-gray-100"
                    }`}
                  >
                    <Image
                      src={uk}
                      alt="English"
                      className="h-5 mr-2 w-auto"
                      width={500}
                      height={400}
                    />
                    English
                    {language === "English" && (
                      <Image
                        src="/assets/mark.png"
                        alt="Selected"
                        className="ml-2 w-auto"
                        width={500}
                        height={400}
                      />
                    )}
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setLanguage("Arabic")}
                    className={`flex items-center px-4 py-2 text-sm text-gray-700 w-full hover:bg-gray-100 ${
                      active && "bg-gray-100"
                    }`}
                  >
                    <Image
                      src={saudi}
                      alt="Arabic"
                      className="h-5 mr-2 w-auto"
                      width={500}
                      height={400}
                    />
                    Arabic
                    {language === "Arabic" && (
                      <Image
                        src="/assets/mark.png"
                        alt="Selected"
                        className="ml-2 w-auto"
                        width={500}
                        height={400}
                      />
                    )}
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>

        {/* Contact Button for Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600"
        >
          Contact us
        </Link>
      </div>

      {/* Mobile Menu - Toggle on hamburger click */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-gray-700 text-center">
            <li>
              <Link
                href="/"
                onClick={() => handleMobileLinkClick("/")}
                className={`block p-2 rounded ${
                  activeMobileLink === "/" ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => handleMobileLinkClick("/about")}
                className={`block p-2 rounded ${
                  activeMobileLink === "/about"
                    ? "bg-yellow-500 text-white"
                    : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                onClick={() => handleMobileLinkClick("/#faq")}
                className={`block p-2 rounded ${
                  activeMobileLink === "/#faq" ? "bg-yellow-500 text-white" : ""
                }`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => handleMobileLinkClick("/blog")}
                className={`block p-2 rounded ${
                  activeMobileLink === "/blog" ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                onClick={() => handleMobileLinkClick("/reviews")}
                className={`block p-2 rounded ${
                  activeMobileLink === "/reviews"
                    ? "bg-yellow-500 text-white"
                    : ""
                }`}
              >
                Reviews
              </Link>
            </li>
          </ul>

          {/* Language Dropdown for Mobile */}
          <div className="mt-4 flex justify-center">
            <button
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
              onClick={() =>
                setLanguage(language === "English" ? "Arabic" : "English")
              }
            >
              <Image
                src={`/${
                  language === "English"
                    ? "assets/ukflag.png"
                    : "assets/saudiflag.png"
                }`}
                alt="Language"
                className="h-5 w-auto"
                width={500}
                height={400}
              />
              <span>{language}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
