import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

import { useRouter } from "next/router";
import { Fragment } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");
  return (
    <main className={montserrat.className}>
      {!isAdminPage && <Navbar />} {/* Conditionally render Navbar */}
      <Component {...pageProps} />
      {!isAdminPage && <Footer />} {/* Conditionally render Footer */}
    </main>
  );
}
