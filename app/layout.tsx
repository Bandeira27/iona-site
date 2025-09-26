import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/css/extra.css";
import "@/app/css/framer.css";
import "@/app/css/globals.css";
import "@/app/css/declarations.css";
import "@/app/css/about-me.css";
import "@/app/css/contact.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IonaSzkurnik",
  description: "Site profissional de Iona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="framer-UkBuu bg-[#f3f3f3]"
          data-layout-template="true"
          style={{ minHeight: "100vh", width: "auto" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
