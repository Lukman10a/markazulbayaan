import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigationMenu";
import { cn } from "@/lib/utils";
import Button from "../button";

function DesktopNavbar() {
  const pathname = usePathname();

  // const isActive = (href: string) => {
  //   return href === "/" ? pathname === href : pathname.startsWith(href);
  // };

  return (
    <NavigationMenu className="2md:hidden">
      <NavigationMenuList className="space-x-5 rounded-full px-7 text-black">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-white"
                // isActive("/") && "active text-blue-500"
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "active text-white"
                // isActive("/about") && "text-blue-500"
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/it-support" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "active text-white"
                // isActive("/it-support") && "text-blue-500"
              )}
            >
              I.T Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/consultancy" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "active text-white"
                // isActive("/consultancy") && "text-blue-500"
              )}
            >
              Consultancy
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/it-training" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-white"
                // isActive("/it-training") && "active text-blue-500"
              )}
            >
              I.T Training
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/career" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                "text-white"
                // isActive("/career") && "active text-blue-500"
              )}
            >
              Career
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button
            asLink
            className={cn(
              "w-full rounded-md bg-white p-2"
              // isActive("/contact") && "active bg-blue-500 text-white"
            )}
            href="/contact"
            text="Contact us"
          />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DesktopNavbar;
