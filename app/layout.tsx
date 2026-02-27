import type { Metadata } from "next";
import "./globals.css";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";



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

      <body className="min-h-screen flex flex-col justify-between antialiased px-4 py-8">
      <Nav/>
        {children}
      <Footer/>
      </body>

    </html>

  );
}
