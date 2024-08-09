import React from "react";
import logo from "../../../public/assets/markaz.png";
import Image from "next/image";
import Link from "next/link";
import { inter } from "@/lib/utils";
import DesktopNavbar from "./DesktopNav";
import { MobileMenu } from "./mobileNav";

export const servicesSubnav = [
  {
    title: "Microsoft security",
    href: "/microsoft-security",
  },
  {
    title: "Microsoft exchange and online premise",
    href: "/microsoft-exchange",
  },
  {
    title: "Microsoft Identity",
    href: "/microsoft-identity",
  },
  {
    title: "Microsoft Collaboration and Productivity tools",
    href: "/microsoft-security",
  },
];

export const insightsSubnav = [
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
];

export default function Navbar() {
  return (
    <nav
      className={`${inter.variable} flex items-center justify-between gap-10 bg-[black] bg-opacity-90 px-10 py-5 font-inter text-white`}
    >
      <div>
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="sm:w-44" />
        </Link>
      </div>
      <DesktopNavbar />
      <div className="hidden 2md:block">
        <MobileMenu />
      </div>
    </nav>
  );
}
