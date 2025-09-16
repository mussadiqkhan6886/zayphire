import type { Metadata } from "next";
;import "./globals.css";
import Footer from "@/components/userComponents/Footer";
import { interTight } from "@/lib/fonts/font";
import Header from "@/components/userComponents/Header";

export const metadata: Metadata = {
  title: {
    default: "Zayphire",
    template: "%s Zayphire", 
  },
  description:
    "Shop premium perfumes, fashion, and accessories at Zayphire. High-quality products, secure checkout, and fast delivery across Pakistan.",
  keywords: [
    "Zayphire",
    "eCommerce",
    "perfumes",
    "fashion",
    "online store",
    "buy perfumes Pakistan",
    "premium accessories",
    "luxury products",
    "fabrics",
    "Shalwar kamees"
  ],
  authors: [{ name: "Zayphire Team" }],
  creator: "Zayphire",
  publisher: "Zayphire",

  openGraph: {
    title: "Zayphire",
    description:
      "Discover luxury perfumes, fashion, and accessories at Zayphire. Shop online with secure payments and fast delivery.",
    url: "https://zayphire.com", // replace with your domain
    siteName: "Zayphire",
    images: [
      {
        url: "https://zayphire.com/zayphireBlack.png", // add a real image path
        width: 1200,
        height: 630,
        alt: "Zayphire E-Commerce Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Zayphire",
    description:
      "Shop perfumes, fashion, and luxury accessories at Zayphire. Fast shipping and trusted quality.",
    site: "@zayphire", // your Twitter handle if available
    creator: "@zayphire",
    images: ["https://zayphire.com/zayphireBlack.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  // Robots
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

  // Other SEO extras
  alternates: {
    canonical: "https://zayphire.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${interTight.className} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
