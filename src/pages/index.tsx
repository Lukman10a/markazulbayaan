import Image from "next/image";
import { Inter } from "next/font/google";
import { Learn } from "@/components/learn";
import { Subject } from "@/components/subject";
import { Hero } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Learn />
      <Subject />
    </main>
  );
}
