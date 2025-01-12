import { Inter } from "next/font/google";
import HomePage from "../components/home";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
