"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, BookOpen, Users, MessageCircle, Home } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import logo from "../../../public/assets/mbayan.png";
import { useScrollLock } from "@/hooks/useScrollLock";
import { ScrollArea } from "../ui/scrollArea";
import { navItems } from "./data";

export function MainNav() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

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
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="relative z-50 font-inter" 
      id="scrollable"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.nav 
        className={cn(
          "fixed top-0 w-full transition-all duration-300 backdrop-blur-md border-b",
          scrollY > 20 
            ? "bg-white/95 shadow-lg border-gray-200" 
            : "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 xl:px-6 lg:px-8 md:px-6 sm:px-4">
          <div className="flex h-16 xl:h-18 lg:h-16 md:h-14 sm:h-12 items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-6 lg:gap-4 md:gap-3"
              variants={itemVariants}
            >
              <Link href="/" className="flex items-center space-x-3 lg:space-x-2 group">
                <div className="relative">
                  <Image
                    src={logo}
                    width={160}
                    height={160}
                    priority
                    alt="Markazul Bayaan Logo"
                    className="size-12 xl:size-14 lg:size-10 md:size-8 sm:size-6 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className={cn(
                    "font-bold text-lg xl:text-xl lg:text-base md:text-sm transition-colors duration-300",
                    scrollY > 20 ? "text-gray-900" : "text-white"
                  )}>
                    Markazul Bayaan
                  </h1>
                  <p className={cn(
                    "text-xs xl:text-sm lg:text-xs md:text-xs transition-colors duration-300",
                    scrollY > 20 ? "text-gray-600" : "text-yellow-100"
                  )}>
                    Islamic Education Center
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              className="sm:hidden flex items-center gap-8 lg:gap-6 md:gap-4"
              variants={itemVariants}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href || "/"}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-base xl:text-lg lg:text-sm md:text-xs font-medium transition-all duration-300 relative group hover:bg-transparent px-4 lg:px-3 md:px-2",
                        isActive(item?.href as string) 
                          ? scrollY > 20 
                            ? "text-yellow-600" 
                            : "text-yellow-200"
                          : scrollY > 20 
                            ? "text-gray-700 hover:text-yellow-600" 
                            : "text-white hover:text-yellow-200"
                      )}
                    >
                      {item.title}
                      <span className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full",
                        isActive(item?.href as string) ? "w-full" : ""
                      )}></span>
                    </Button>
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="https://bit.ly/Learn-at-markazbayan">
                  <Button 
                    className={cn(
                      "font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-xs px-6 lg:px-4 md:px-3 py-2 lg:py-1.5",
                      scrollY > 20 
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white" 
                        : "bg-white hover:bg-yellow-50 text-yellow-600 hover:text-yellow-700"
                    )}
                  >
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              className="sm:block hidden"
              variants={itemVariants}
            >
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "transition-all duration-300 border",
                        scrollY > 20 
                          ? "bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700"
                          : "bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm"
                      )}
                    >
                      <AnimatePresence mode="wait">
                        {isSheetOpen ? (
                          <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <X className="h-5 w-5 lg:h-4 lg:w-4" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Menu className="h-5 w-5 lg:h-4 lg:w-4" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </motion.div>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="max-w-[400px] md:max-w-[350px] sm:w-full bg-gradient-to-br from-white to-gray-50 border-l border-gray-200"
                >
                  <SheetHeader className="border-b border-gray-200 pb-6 lg:pb-4 md:pb-3 mb-6 lg:mb-4 md:mb-3">
                    <SheetTitle className="flex items-center space-x-3 lg:space-x-2">
                      <Image
                        src={logo}
                        width={40}
                        height={40}
                        alt="Markazul Bayaan Logo"
                        className="size-10 lg:size-8 md:size-6 object-contain"
                      />
                      <div>
                        <h2 className="text-lg lg:text-base md:text-sm font-bold text-gray-900">Markazul Bayaan</h2>
                        <p className="text-xs lg:text-xs md:text-xs text-gray-600">Islamic Education Center</p>
                      </div>
                    </SheetTitle>
                    <SheetDescription className="text-left text-sm lg:text-xs text-gray-600 leading-relaxed">
                      Explore our comprehensive courses in Arabic language, Quranic studies, and Islamic theology to deepen your understanding of the religion.
                    </SheetDescription>
                  </SheetHeader>
                  
                  <ScrollArea className="h-[calc(100vh-12rem)] lg:h-[calc(100vh-10rem)]">
                    <nav className="space-y-2 lg:space-y-1">
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
                                "flex items-center space-x-3 lg:space-x-2 p-4 lg:p-3 md:p-2 rounded-xl lg:rounded-lg transition-all duration-300 group",
                                isActive(item?.href as string) 
                                  ? "bg-yellow-100 border border-yellow-200 text-yellow-800" 
                                  : "hover:bg-gray-100 text-gray-700"
                              )}
                              whileHover={{ scale: 1.02, x: 4 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className={cn(
                                "p-2 lg:p-1.5 md:p-1 rounded-lg lg:rounded transition-colors",
                                isActive(item?.href as string) 
                                  ? "bg-yellow-200 text-yellow-700" 
                                  : "bg-gray-200 text-gray-600 group-hover:bg-yellow-200 group-hover:text-yellow-700"
                              )}>
                                {getNavIcon(item.title)}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-base lg:text-sm md:text-xs">{item.title}</h3>
                                <p className="text-xs lg:text-xs md:text-xs text-gray-500">
                                  {getNavDescription(item.title)}
                                </p>
                              </div>
                              <ChevronDown className="h-4 w-4 lg:h-3 lg:w-3 rotate-270 text-gray-400 group-hover:text-yellow-600" />
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    {/* Mobile CTA */}
                    <motion.div 
                      className="mt-8 lg:mt-6 md:mt-4 p-4 lg:p-3 md:p-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl lg:rounded-lg text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="font-bold text-lg lg:text-base md:text-sm mb-2 lg:mb-1">Ready to Start Learning?</h3>
                      <p className="text-sm lg:text-xs md:text-xs text-yellow-100 mb-4 lg:mb-3 md:mb-2">
                        Join thousands of students in their Islamic education journey.
                      </p>
                      <Link href="https://bit.ly/Learn-at-markazbayan">
                        <motion.button 
                          className="w-full bg-white text-yellow-600 font-semibold py-3 lg:py-2.5 md:py-2 rounded-lg lg:rounded-xl transition-colors hover:bg-yellow-50 text-sm lg:text-xs"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Enroll Now
                        </motion.button>
                      </Link>
                    </motion.div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </motion.nav>
  );
}

// Helper function to get appropriate icons for navigation items
function getNavIcon(title: string) {
  const iconMap: { [key: string]: JSX.Element } = {
    'Home': <Home className="h-4 w-4 lg:h-3 lg:w-3" />,
    'Courses': <BookOpen className="h-4 w-4 lg:h-3 lg:w-3" />,
    'About': <Users className="h-4 w-4 lg:h-3 lg:w-3" />,
    'Blog': <MessageCircle className="h-4 w-4 lg:h-3 lg:w-3" />,
    'Contact': <MessageCircle className="h-4 w-4 lg:h-3 lg:w-3" />,
    'Reviews': <Users className="h-4 w-4 lg:h-3 lg:w-3" />,
  };
  return iconMap[title] || <BookOpen className="h-4 w-4 lg:h-3 lg:w-3" />;
}

// Helper function to get descriptions for navigation items
function getNavDescription(title: string) {
  const descMap: { [key: string]: string } = {
    'Home': 'Return to homepage',
    'Courses': 'Browse our courses',
    'About': 'Learn about us',
    'Blog': 'Read our articles',
    'Contact': 'Get in touch',
    'Reviews': 'Student testimonials',
  };
  return descMap[title] || 'Navigate to page';
}
