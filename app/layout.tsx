import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Fraunces } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const site =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "Roopashri & Dhakshinamoorthy's Wedding | June 7, 2026",
  description:
    "You are cordially invited to the wedding celebration of Roopashri U & Dhakshinamoorthy A on June 7, 2026 at KNT Kalyana Mantapa, Bengaluru.",
  openGraph: {
    title: "Roopashri & Dhakshinamoorthy's Wedding Invitation",
    description:
      "Join us for the wedding celebration on June 7, 2026 at KNT Kalyana Mantapa, Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${cormorant.variable}`}
    >
      <body className="min-h-[100dvh] antialiased font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
