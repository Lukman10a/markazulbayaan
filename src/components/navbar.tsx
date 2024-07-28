import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-32 bg-yellow-50">
      <div>
        <Image src={require("../../public/assets/markaz.png")} alt="markaz" />
      </div>

      <div>
        <ul className="flex justify-between gap-10 font-bold">
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

      <button className="bg-yellow-600 text-white p-3 rounded-md">
        Contact us
      </button>
    </div>
  );
};
