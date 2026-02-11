import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rejish Khanal - Full-Stack Developer & SEO Specialist",
    template: "%s | Rejish Khanal",
  },
  description:
    "Full-Stack Developer and SEO Specialist specializing in modern web applications. Building scalable solutions with React, Next.js, Node.js, and more.",
  keywords: [
    "Rejish Khanal",
    "Full-Stack Developer",
    "SEO Specialist",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Nepal Developer",
  ],
  authors: [{ name: "Rejish Khanal" }],
  creator: "Rejish Khanal",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://rejishkhanal.com.np"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Rejish Khanal - Full-Stack Developer & SEO Specialist",
    description:
      "Full-Stack Developer and SEO Specialist specializing in modern web applications.",
    siteName: "Rejish Khanal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rejish Khanal - Full-Stack Developer & SEO Specialist",
    description:
      "Full-Stack Developer and SEO Specialist specializing in modern web applications.",
    creator: "@rejishkhanal",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${jetbrainsMono.variable} ${sora.variable} antialiased`}
      >
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
