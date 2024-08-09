import Footer from "@/components/footer";
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/navBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
