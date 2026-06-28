import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const SITE_URL = "https://frontdoorapp.co";
const TITLE = "Frontdoor — Your business’s digital front door";
const DESCRIPTION =
  "Frontdoor brings your business’s entire online presence into one clean, simple place. Set it up once, then get back to running your business.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Frontdoor",
  },
  description: DESCRIPTION,
  applicationName: "Frontdoor",
  keywords: [
    "Frontdoor",
    "frontdoorapp",
    "digital presence",
    "online presence for small business",
    "business profile page",
    "small business website alternative",
    "link in bio for business",
    "business listing",
  ],
  authors: [{ name: "Frontdoor" }],
  creator: "Frontdoor",
  publisher: "Frontdoor",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Frontdoor",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/logo_banner.jpg",
        width: 1672,
        height: 941,
        alt: "frontdoorapp.co — your business’s digital front door",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo_banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0f1f47",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
