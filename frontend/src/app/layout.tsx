import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Rejish Khanal — Technical SEO Specialist & Full Stack Developer",
    template: "%s | Rejish Khanal",
  },
  description:
    "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal. I help businesses rank higher and build faster using SEO audits, Core Web Vitals fixes, and modern web development.",
  keywords: [
    "technical SEO specialist",
    "full stack developer Nepal",
    "SEO expert Kathmandu",
    "hire SEO specialist",
    "SEO audits",
    "Core Web Vitals",
    "JavaScript SEO",
  ],
  authors: [{ name: "Rejish Khanal", url: "https://rejishkhanal.com.np" }],
  creator: "Rejish Khanal",
  metadataBase: new URL("https://rejishkhanal.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rejishkhanal.com.np",
    title: "Rejish Khanal — Technical SEO Specialist & Full Stack Developer",
    description:
      "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal. I help businesses rank higher and build faster using SEO audits, Core Web Vitals fixes, and modern web development.",
    siteName: "Rejish Khanal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejish Khanal — Technical SEO Specialist & Full Stack Developer",
    description:
      "Technical SEO Specialist and Full Stack Developer based in Kathmandu, Nepal.",
    creator: "@KhanalRejish",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    jobTitle: "Technical SEO Specialist & Full Stack Developer",
    email: "contact@rejishkhanal.com.np",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: ["https://twitter.com/KhanalRejish"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rejish Khanal",
    url: "https://rejishkhanal.com.np",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rejishkhanal.com.np/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

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
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6997338914679261"
          crossOrigin="anonymous"
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
        </ThemeProvider>
      </body>
    </html>
  );
}
