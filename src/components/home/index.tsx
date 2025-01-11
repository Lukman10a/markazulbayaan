import React from "react";
import { Hero } from "../hero";
// import Testimonials from "../testimonial";

import Faq from "../Faq";
// import CommunitySection from "./CommunitySection";
// import StatSection from "./StatSection";
// import Discover from "./discover";
import Embark from "./embark";
import TestimonialCarousel from "./newTestimonial";
import Learn from "./learn";
import WhyChoose from "./whyChoose";
import HeroSection from "../SecondHeroSection";
import OfferSection from "../OfferSection";

export default function HomePage() {

  const offers = [
    {
      title: "Arabic",
      description: "Gain fluency in the Arabic language, the key to understanding Islamic texts.",
      link: "/course/arabic",
      imageSrc: "/assets/hadith.png",
      imageAlt: "arabic books"
    },
    {
      title: "Quran",
      description: "Master Quranic recitation, memorization, and Tafseer.",
      link: "/course/quran",
      imageSrc: "/assets/quran.png",
      imageAlt: "the noble quran"
    },
    {
      title: "Hadith",
      description: "Learn the sayings of the Prophet Muhammad.",
      link: "/course/hadith",
      imageSrc: "/assets/hadith.png",
      imageAlt: "hadith books"
    },
    {
      title: "Fiqh",
      description: "Understand Islamic jurisprudence and law.",
      link: "/course/fiqh",
      imageSrc: "/assets/quran.png",
      imageAlt: "fiqh books"
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
      {/* 
      <Learn />
      <WhyChoose />
      <Faq /> */}
    </>
  );
}
