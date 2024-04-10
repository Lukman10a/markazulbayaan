import Image from "next/image";
import React from "react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-10 px-20 bg-yellow-50">
      <div>
        <Image src={require("../../public/markaz.png")} alt="markaz" />
      </div>

      <div>
        <ul className="flex justify-between gap-10 font-bold">
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
          <li>Blog</li>
        </ul>
      </div>

      <button className="bg-yellow-600 text-white p-3 rounded-md">
        Contact us
      </button>
    </div>
  );
};
