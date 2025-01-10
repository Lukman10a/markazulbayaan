import React from "react";
import { Hero } from "../hero";
// import Testimonials from "../testimonial";

// import Faq from "../Faq";
// import CommunitySection from "./CommunitySection";
// import StatSection from "./StatSection";
// import Discover from "./discover";
import Embark from "./embark";
import TestimonialCarousel from "./newTestimonial";
// import Learn from "./learn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Embark />
      <TestimonialCarousel />
      {/* <Testimonials /> */}
      {/* <StatSection />
      <Discover /> 
      <Learn />
      <CommunitySection />
      <Faq />  */}
    </>
  );
}
