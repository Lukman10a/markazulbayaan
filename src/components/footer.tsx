import Image from "next/image";
import React from "react";
import footerImage from "@../../../public/assets/markaz.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2E2105] p-20 text-white">
      <div className="flex justify-between items-center">
        <div>
          <Image src={footerImage} alt="" className="py-4" />
          <p>Welcome to Markazul-Bayan: Your Gateway to Islamic Knowledge</p>
        </div>

        <div>
          <ul className="flex justify-between gap-10 font-bold ">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About</li>
            </Link>
            <Link href={"/faq"}>
              <li>FAQ</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
