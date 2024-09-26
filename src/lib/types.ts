import { StaticImageData } from "next/image";

export interface Hero {
  title: string;
  date: string; // Could also be a Date if you parse it into a Date object
  author: string;
  description: string;
  buttonText: string;
  image: string; // Assuming this is a path to an image
}

export interface FeaturedPost {
  title: string;
  author: string;
  date: string; // Could also be a Date if you parse it into a Date object
  description: string;
  image: string | StaticImageData; // Assuming this is a path to an image
}

export interface BlogPost {
  title: string;
  author: string;
  description: string;
  date: string; // Could also be a Date if you parse it into a Date object
}

export interface AboutUs {
  title: string;
  description: string;
  buttonText: string;
}

export interface OurMission {
  title: string;
  description: string;
}

export interface WhyWeStarted {
  title: string;
  description: string;
  buttonText: string;
  image: string; // Assuming this is a path to an image
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface DummyData {
  hero: Hero;
  featuredPost: FeaturedPost;
  allPosts: BlogPost[];
  aboutUs: AboutUs;
  ourMission: OurMission;
  whyWeStarted: WhyWeStarted;
  testimonials: Testimonial[];
}

// Example usage
