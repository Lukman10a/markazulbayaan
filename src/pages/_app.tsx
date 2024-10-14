// import Footer from "@/components/footer";
// import Navbar from "@/components/Nav";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// import { Montserrat } from "next/font/google";
// import Head from "next/head";
// import { useRouter } from "next/router";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   display: "swap",
// });

// export default function App({ Component, pageProps }: AppProps) {
//   const router = useRouter();
//   const isAdminPage = router.pathname.startsWith("/admin");
//   return (
//     <>
//       <Head>
//         <title>Markazul Bayaan</title>
//       </Head>
//       <div className={montserrat.className}>
//         {!isAdminPage && <Navbar />} {/* Conditionally render Navbar */}
//         <main>
//           <Component {...pageProps} />
//         </main>
//         {!isAdminPage && <Footer />} {/* Conditionally render Footer */}
//       </div>
//     </>
//   );
// }

import Footer from "@/components/footer";
import Navbar from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script"; // Import Next.js Script

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <>
      <Head>
        <title>Markazul Bayaan</title>
      </Head>

      {/* Google Analytics Integration */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XJ508KSKYF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XJ508KSKYF'); // Replace with your GA tracking ID
        `}
      </Script>

      <div className={montserrat.className}>
        {!isAdminPage && <Navbar />} {/* Conditionally render Navbar */}
        <main>
          <Component {...pageProps} />
        </main>
        {!isAdminPage && <Footer />} {/* Conditionally render Footer */}
      </div>
    </>
  );
}
