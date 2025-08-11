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
import { useTheme } from "@/lib/theme-context";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer className={`bg-[url(/assets/footer.png)] bg-center bg-cover text-white py-16 relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800'
    }`}>
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-black/80' 
          : 'bg-black/60'
      }`}></div>
      
      <div className="mx-auto px-[8vw] relative z-10">
        <div className={`flex items-center flex-wrap gap-5 justify-between mb-12 py-10 border-b-2 ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-600'
        }`}>
          <div className="flex">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Logo"
                className="mr-4 w-auto h-[58px] mb-4"
                width={500}
                height={400}
              />
            </div>
          </div>

          <nav className="flex gap-5">
            <Link href="/about" className={`hover:text-yellow-400 sm:text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
              About us
            </Link>
            {/* <Link href="/faq" className={`hover:text-yellow-400 sm:text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
              FAQ
            </Link> */}
            <Link href="/blog" className={`hover:text-yellow-400 sm:text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
              Blog
            </Link>
            <Link href="/reviews" className={`hover:text-yellow-400 sm:text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
              Review
            </Link>
            <Link href="/course" className={`hover:text-yellow-400 sm:text-sm transition-colors duration-200 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-200'
            }`}>
              Courses
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="/contact"
              className={`hover:text-yellow-400 p-4 rounded-full transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <FaGoogle size={20} />
            </Link>
            <Link
              href="https://whatsapp.com/channel/0029VarQvHiLY6d000oWu82O"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-yellow-400 p-4 rounded-full transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <FaWhatsapp size={20} />
            </Link>

            <Link
              href="https://www.instagram.com/markazulbayaanbenefits?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-yellow-400 p-4 rounded-full transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="https://t.me/bayanbenefits"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-yellow-400 p-4 rounded-full transition-colors duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 hover:bg-gray-700/50' 
                  : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <FaTelegram size={20} />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-300'}>
            © 2025 Markazul Bayan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
