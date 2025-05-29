"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import logo from "../../../public/assets/mbayan.png";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ScrollArea } from "../ui/scrollArea";
import { navItems } from "./data";
import { useTheme } from "@/lib/theme-context";

export function MainNav() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => pathname?.startsWith(href);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#scrollable",
  });
  const router = useRouter();

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (activeItem) {
      lock();
    } else {
      unlock();
    }
    return () => {
      unlock();
    };
  }, [activeItem, lock, unlock]);

  React.useEffect(() => {
    const handleRouteChange = () => {
      setActiveItem(null);
      setIsSheetOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50" 
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav 
        className={cn(
          "transition-all duration-500 ease-in-out border-b backdrop-blur-lg",
          scrollY > 20 
            ? theme === 'dark'
              ? "bg-gray-900/95 border-gray-800 shadow-2xl" 
              : "bg-white/95 border-gray-200 shadow-2xl"
            : theme === 'dark'
              ? "bg-gray-900/60 border-gray-800/50"
              : "bg-white/60 border-gray-200/50"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
          <div className="flex items-center justify-between h-16 xl:h-18 lg:h-16 md:h-14 sm:h-12">
            
            {/* Logo Section */}
            <motion.div 
              className="flex items-center"
              variants={itemVariants}
            >
              <Link href="/" className="flex items-center space-x-3 lg:space-x-2 group">
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <Image
                      src={logo}
                      width={160}
                      height={160}
                      priority
                      alt="Markazul Bayaan"
                      className="size-10 xl:size-12 lg:size-10 md:size-8 sm:size-6 object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="hidden sm:block">
                  <motion.h1 
                    className={cn(
                      "font-bold text-lg xl:text-xl lg:text-base md:text-sm transition-colors duration-300",
                      theme === 'dark' ? "text-white" : "text-gray-900"
                    )}
                    whileHover={{ scale: 1.05 }}
                  >
                    Markazul Bayaan
                  </motion.h1>
                  <p className={cn(
                    "text-xs xl:text-sm lg:text-xs md:text-xs transition-colors duration-300",
                    theme === 'dark' ? "text-gray-400" : "text-gray-600"
                  )}>
                    Islamic Education Center
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              className="sm:hidden flex items-center space-x-1"
              variants={itemVariants}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href || "/"}>
                    <motion.div
                      className={cn(
                        "relative px-4 py-2 rounded-lg transition-all duration-300 group",
                        isActive(item?.href as string) 
                          ? theme === 'dark'
                            ? "bg-yellow-500/20 text-yellow-400" 
                            : "bg-yellow-50 text-yellow-600"
                          : theme === 'dark'
                            ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                      )}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="font-medium text-sm xl:text-base lg:text-sm relative z-10">
                        {item.title}
                      </span>
                      {isActive(item?.href as string) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-lg"
                          layoutId="activeTab"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side Actions */}
            <motion.div 
              className="flex items-center space-x-4 lg:space-x-3 md:space-x-2"
              variants={itemVariants}
            >
              
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={cn(
                  "relative p-2 rounded-lg transition-all duration-300",
                  theme === 'dark'
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                )}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {theme === 'dark' ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="h-4 w-4 lg:h-5 lg:w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, rotate: 180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="h-4 w-4 lg:h-5 lg:w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* CTA Button - Desktop */}
              <motion.div
                className="sm:hidden lg:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://bit.ly/Learn-at-markazbayan">
                  <motion.div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 p-0.5 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg px-6 py-2.5 text-white font-semibold text-sm flex items-center space-x-2">
                      <Sparkles className="h-4 w-4" />
                      <span>Enroll Now</span>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-lg"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Mobile Menu */}
              <div className="hidden sm:block">
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <motion.button
                      className={cn(
                        "p-2 rounded-lg transition-all duration-300",
                        theme === 'dark'
                          ? "bg-gray-800 hover:bg-gray-700 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                      )}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {isSheetOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <X className="h-5 w-5" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Menu className="h-5 w-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </SheetTrigger>
                  
                  <SheetContent
                    side="right"
                    className={cn(
                      "w-full max-w-sm border-l",
                      theme === 'dark'
                        ? "bg-gray-900 border-gray-800"
                        : "bg-white border-gray-200"
                    )}
                  >
                    <SheetHeader className="text-left pb-6 border-b border-gray-200 dark:border-gray-800">
                      <SheetTitle className="flex items-center space-x-3">
                        <Image
                          src={logo}
                          width={40}
                          height={40}
                          alt="Markazul Bayaan"
                          className="size-8 object-contain"
                        />
                        <div>
                          <h2 className={cn(
                            "text-lg font-bold",
                            theme === 'dark' ? "text-white" : "text-gray-900"
                          )}>
                            Markazul Bayaan
                          </h2>
                          <p className={cn(
                            "text-sm",
                            theme === 'dark' ? "text-gray-400" : "text-gray-600"
                          )}>
                            Islamic Education Center
                          </p>
                        </div>
                      </SheetTitle>
                      <SheetDescription className={cn(
                        "text-sm leading-relaxed",
                        theme === 'dark' ? "text-gray-400" : "text-gray-600"
                      )}>
                        Comprehensive courses in Arabic language, Quranic studies, and Islamic theology.
                      </SheetDescription>
                    </SheetHeader>
                    
                    <ScrollArea className="my-6 h-[calc(100vh-16rem)]">
                      <div className="space-y-2">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link href={item.href || "/"}>
                              <motion.div
                                className={cn(
                                  "flex items-center justify-between p-4 rounded-xl transition-all duration-300",
                                  isActive(item?.href as string) 
                                    ? theme === 'dark'
                                      ? "bg-yellow-500/20 border border-yellow-500/30 text-yellow-400" 
                                      : "bg-yellow-50 border border-yellow-200 text-yellow-600"
                                    : theme === 'dark'
                                      ? "hover:bg-gray-800 text-gray-300"
                                      : "hover:bg-gray-100 text-gray-700"
                                )}
                                whileHover={{ x: 8, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className="font-medium text-base">{item.title}</span>
                                <ChevronDown className="h-4 w-4 -rotate-90" />
                              </motion.div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </ScrollArea>

                    {/* Mobile CTA */}
                    <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                      <Link href="https://bit.ly/Learn-at-markazbayan">
                        <motion.div 
                          className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl p-4 text-white text-center shadow-lg"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <Sparkles className="h-5 w-5" />
                            <span className="font-semibold text-lg">Start Learning Today</span>
                          </div>
                          <p className="text-sm text-yellow-100 mt-1">
                            Join thousands of students worldwide
                          </p>
                        </motion.div>
                      </Link>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

