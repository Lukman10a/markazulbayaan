import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link"; // Using Link component for navigation
import { useRouter } from "next/router"; // Import useRouter to get current path
import mbayan from "../../public/assets/mbayan.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter(); // Initialize useRouter to get the current path

  const isActiveLink = (href: string) => router.pathname === href;

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={mbayan}
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
              className={isActiveLink("/") ? "text-yellow-500" : ""}
            >
              Home
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/about"
              className={isActiveLink("/about") ? "text-yellow-500" : ""}
            >
              About
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/#faq"
              className={isActiveLink("/#faq") ? "text-yellow-500" : ""}
            >
              FAQ
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/blog"
              className={isActiveLink("/blog") ? "text-yellow-500" : ""}
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/reviews"
              className={isActiveLink("/reviews") ? "text-yellow-500" : ""}
            >
              Reviews
            </Link>
          </li>
          <li className="hover:text-gray-900 font-semibold">
            <Link
              href="/course"
              className={isActiveLink("/course") ? "text-yellow-500" : ""}
            >
              Courses
            </Link>
          </li>
        </ul>

        {/* Contact Button for Desktop */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-600"
        >
          Contact us
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-gray-700 text-center">
            <li>
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/about") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/#faq") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/blog") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/reviews") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/course"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/course") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`block p-2 rounded ${
                  isActiveLink("/contact") ? "bg-yellow-500 text-white" : ""
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
