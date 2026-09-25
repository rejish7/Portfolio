import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SchemaScript } from "@/components/SchemaScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rejishkhanal.com.np"),
  applicationName: "Rejish Khanal",
  title: {
    default: "Rejish Khanal | SEO Expert and Web Developer",
    template: "%s | Rejish Khanal",
  },
  description:
    "Rejish Khanal is an SEO expert and web developer in Nepal providing technical SEO, AEO, GEO, Core Web Vitals, audits, and development.",
  keywords: [
    "technical SEO expert in Nepal",
    "SEO expert in Nepal",
    "AEO expert in Nepal",
    "GEO expert in Nepal",
    "full-stack developer Nepal",
    "Core Web Vitals expert Nepal",
    "JavaScript SEO expert Nepal",
    "Next.js SEO expert Nepal",
    "SEO expert Kathmandu",
  ],
  authors: [{ name: "Rejish Khanal", url: "https://rejishkhanal.com.np" }],
  creator: "Rejish Khanal",
  icons: {
    icon: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rejishkhanal.com.np/",
    title: "Rejish Khanal | SEO Expert and Web Developer",
    description:
      "Technical SEO, AEO, GEO, Core Web Vitals, SEO audits, and web development services.",
    siteName: "Rejish Khanal",
    images: [
      {
        url: "https://rejishkhanal.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rejish Khanal - SEO Expert and Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejish Khanal | SEO Expert and Web Developer",
    description:
      "Technical SEO, AEO, GEO, Core Web Vitals, SEO audits, and web development services.",
    creator: "@KhanalRejish",
    images: ["https://rejishkhanal.com.np/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://rejishkhanal.com.np/#website",
        url: "https://rejishkhanal.com.np/",
        name: "Rejish Khanal",
        alternateName: ["Rejish", "Rejish Khanal SEO"],
        inLanguage: "en",
        publisher: {
          "@id": "https://rejishkhanal.com.np/#person",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://rejishkhanal.com.np/blog?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        "@id": "https://rejishkhanal.com.np/#person",
        name: "Rejish Khanal",
        alternateName: ["Rejish", "Rejish Khanal SEO"],
        url: "https://rejishkhanal.com.np/",
        image: "https://rejishkhanal.com.np/assets/images/rejish-khanal.webp",
        jobTitle: ["Technical SEO Expert", "Full-Stack Developer"],
        description:
          "Rejish Khanal is an SEO expert and web developer in Nepal providing technical SEO, AEO, GEO, Core Web Vitals, audits, and development.",
        email: "contact@rejishkhanal.com.np",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressRegion: "Bagmati",
          addressCountry: "NP",
        },
        geo: { "@type": "GeoCoordinates", latitude: 27.7172, longitude: 85.324 },
        knowsAbout: [
          "Technical SEO",
          "Search Engine Optimization",
          "Answer Engine Optimization",
          "Generative Engine Optimization",
          "Core Web Vitals",
          "JavaScript SEO",
          "Structured Data",
          "Google Search Console",
          "Next.js",
          "Django",
          "Laravel",
        ],
        sameAs: [
          "https://www.linkedin.com/in/rejishkhanalseo/",
          "https://github.com/rejish7",
          "https://x.com/KhanalRejish",
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaScript schema={globalSchema} />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NZBWMFZ9');`,
          }}
        />

      </head>
      <body className={`${inter.variable} antialiased`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NZBWMFZ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  );
}
