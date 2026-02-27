import type { Metadata } from "next";
import "./globals.css";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import Image from "next/image";
import banner from "@/public/banner.webp"


export const metadata: Metadata = {
  title: "Event Landing Page",
  description: "Event Landing Example Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="min-h-screen flex flex-col justify-between antialiased ">
      <div className="relative w-full h-64">
        <Image
          src={banner}
          alt="Banner del evento"
          fill
          priority
          className="object-cover"
        />
      </div>
      <Nav/>
      <div className="px-4 py-2">
        {children}
      </div>
      <Footer/>
      </body>

    </html>

  );
}
