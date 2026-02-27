import About from "./sections/About";
import Features from "./sections/Features";
import CTA from "./sections/CTA";
import Image from "next/image";
import party from "@/public/party.webp"
export default function Home() {
  return (
    <main>
      <About />
      <div className="relative w-full h-64">
        <Image
          src={party}
          alt="Banner party del evento"
          fill
          priority
          className="object-cover"
        />
      </div>
      <Features />
      <CTA />
    </main>
  );
}
