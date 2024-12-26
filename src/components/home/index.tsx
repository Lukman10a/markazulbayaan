import React from "react";
import { Hero } from "../hero";
import Testimonials from "../testimonial";

import Faq from "../Faq";
import CommunitySection from "./CommunitySection";
import StatSection from "./StatSection";
import Discover from "./discover";
import Offer from "./offer";
import Learn from "./learn";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatSection />
      <Discover />
      <Offer />
      <Testimonials />
      <Learn />
      <CommunitySection />
      <Faq />
    </>
  );
}
