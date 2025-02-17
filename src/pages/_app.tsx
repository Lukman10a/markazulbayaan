import Footer from "@/components/footer";
// import Navbar from "@/components/Nav";
import { MainNav } from "@/components/navBar/mainNav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Instrument_Serif } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script"; // Import Next.js Script

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-inter",
});

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-instrument-serif",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <>
      <Head>
        <title>Markazul Bayaan</title>
        <meta
          name="description"
          content="Your Gateway to Islamic Knowledge. The Pursuit of Knowledge: A Duty for Every Muslim"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Markazul-Bayaan" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      {/* Google Tag Manager (Head Section) */}
      <Script
        id="google-tag-manager"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KBV3PVKD');
            `,
        }}
      />

      {/* Google Tag Manager (Noscript) for <body> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-KBV3PVKD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

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

      <div
        className={`${inter.variable} ${inter.className} ${instrumentSerif.variable}`}
      >
        {!isAdminPage && (
          //  <Navbar />
          <MainNav />
        )}
        {/* Conditionally render Navbar */}
        <main className="font-inter">
          <Component {...pageProps} />
        </main>
        {!isAdminPage && <Footer />} {/* Conditionally render Footer */}
      </div>
    </>
  );
}
