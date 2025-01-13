import React from "react";
import Faq from "@/components/Faq";
import { Hero } from "@/components/hero";
import Embark from "@/components/home/embark";
import Learn from "@/components/home/learn";
import TestimonialCarousel from "@/components/home/newTestimonial";
import WhyChoose from "@/components/home/whyChoose";
import OfferSection from "@/components/OfferSection";
import HeroSection from "@/components/SecondHeroSection";

// import CommunitySection from "./CommunitySection";
// import StatSection from "./StatSection";
// import Discover from "./discover";

export default function HomePage() {
  const offers = [
    {
      title: "Arabic",
      description:
        "Gain fluency in the Arabic language, the key to understanding Islamic texts.",
      link: "/course/arabic",
      imageSrc: "/assets/hadith.png",
      imageAlt: "arabic books",
    },
    {
      title: "Quran",
      description: "Master Quranic recitation, memorization, and Tafseer.",
      link: "/course/quran",
      imageSrc: "/assets/quran.png",
      imageAlt: "the noble quran",
    },
    {
      title: "Hadith",
      description: "Learn the sayings of the Prophet Muhammad.",
      link: "/course/hadith",
      imageSrc: "/assets/hadith.png",
      imageAlt: "hadith books",
    },
    {
      title: "Fiqh",
      description: "Understand Islamic jurisprudence and law.",
      link: "/course/fiqh",
      imageSrc: "/assets/quran.png",
      imageAlt: "fiqh books",
    },
  ];

  return (
    <>
      <Hero />
      <HeroSection
        title="Discover the Essence of learning the Deen"
        description="Whether you're a beginner seeking to grasp the fundamentals or an advanced learner striving for mastery, our expert educators are dedicated to guiding you every step of the way."
      />
      <OfferSection offers={offers} />
      <Embark />
      <TestimonialCarousel />
      <Learn />
      <WhyChoose />
      <Faq />
    </>
  );
}
