import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BlogLayout from "../components/BlogLayout";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />;
    </main>
  );
}
