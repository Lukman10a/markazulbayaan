import { Inter } from "next/font/google";
import HomePage from "../components/home";
import StatSection from "@/components/home/StatSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
      <StatSection />
    </main>
  );
}
