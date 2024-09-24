import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BlogLayout from "../components/BlogLayout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
