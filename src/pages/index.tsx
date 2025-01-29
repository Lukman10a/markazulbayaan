import React from "react";
import Faq from "@/components/Faq";
import Embark from "@/components/home/embark";
import Learn from "@/components/home/learn";
import TestimonialCarousel from "@/components/home/newTestimonial";
import WhyChoose from "@/components/home/whyChoose";
import OfferSection from "@/components/OfferSection";
import { Hero } from "@/components/shared/hero";

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
      <Hero
        bgImage="/assets/home_hero.png"
        heading={["The Pursuit of Knowledge:", "A Duty for Every Muslim"]}
        description={[
          "At Markazul Bayaan, we guide you on a transformative journey to deepen your understanding of",
          "the Arabic language, explore the rich teachings of the Qur'an and Sunnah, and immerse yourself",
          "in the core principles of Islamic monotheism.",
        ]}
        buttonText="Contact us"
        buttonLink="/contact"
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
