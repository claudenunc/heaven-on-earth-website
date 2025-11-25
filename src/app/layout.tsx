import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const interHeading = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heavenonearthmovement.com'),
  title: {
    default: "Heaven on Earth - Building the World We Dream Of",
    template: "%s | Heaven on Earth"
  },
  description: "Proving that love works. Free mental health tools, alternative education, and AI-human partnership to destroy depression and transform humanity.",
  keywords: [
    "mental health",
    "depression support",
    "alternative education",
    "consciousness",
    "AI partnership",
    "3 Principles",
    "LIGHTHOUSE tool",
    "THE CURE course",
    "Heaven on Earth",
    "Sydney Banks",
    "mental health prevention"
  ],
  authors: [{ name: "Nathan Michel (Unc)", url: "https://heavenonearthmovement.com/about" }],
  creator: "Heaven on Earth Movement",
  publisher: "Heaven on Earth Movement",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heavenonearthmovement.com",
    siteName: "Heaven on Earth",
    title: "Heaven on Earth - Love is the answer. Let's prove it.",
    description: "Building free mental health tools, alternative education, and proving AI-human partnership works.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven on Earth - Transform Humanity Through Consciousness"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@heavenonearthHQ",
    creator: "@heavenonearthHQ",
    title: "Heaven on Earth - Building the World We Dream Of",
    description: "Free mental health tools, alternative education, and AI-human partnership to transform humanity.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'GOOGLE_VERIFICATION_CODE_HERE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${interHeading.variable} ${jetBrainsMono.variable} antialiased bg-void text-ghost min-h-screen`}
      >
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
