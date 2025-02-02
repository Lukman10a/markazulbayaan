import Image from "next/image";
import React from "react";
import {
  FaGoogle,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
// import markaz from "../../public/assets/markaz.png";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[url(/assets/footer.png)] bg-center bg-cover text-white py-16">
      <div className="mx-auto px-[8vw]">
        <div className="flex items-center flex-wrap gap-5 justify-between mb-12 py-10 border-b-2">
          <div className="flex">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                className=" mr-4 w-auto h-[58px] mb-4"
                width={500}
                height={400}
              />
            </div>
          </div>

          <nav className="flex gap-5">
            <Link href="/about" className="hover:text-gray-400 sm:text-sm">
              About us
            </Link>
            <Link href="/faq" className="hover:text-gray-400 sm:text-sm">
              FAQ
            </Link>
            <Link href="/blog" className="hover:text-gray-400 sm:text-sm">
              Blog
            </Link>
            <Link href="/reviews" className="hover:text-gray-400 sm:text-sm">
              Review
            </Link>
            <Link href="/course" className="hover:text-gray-400 sm:text-sm">
              Courses
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
            >
              <FaGoogle size={20} />
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VarQvHiLY6d000oWu82O"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
            >
              <FaWhatsapp size={20} />
            </Link>

            <Link
              href="https://www.instagram.com/markazulbayaanbenefits?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://t.me/bayanbenefits"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 p-4 bg-[#ffffff18] rounded-full"
            >
              <FaTelegram size={20} />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p>© 2025 Markazul Bayan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
