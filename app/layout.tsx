import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Serif_Tamil, Yatra_One } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const yatra = Yatra_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yatra-one",
  display: "swap",
});

const notoTamil = Noto_Serif_Tamil({
  subsets: ["tamil", "latin"],
  weight: ["400", "600"],
  variable: "--font-noto-tamil",
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
    <html lang="en" className={`${cormorant.variable} ${yatra.variable} ${notoTamil.variable}`}>
      <body className="grain min-h-[100dvh] antialiased">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
