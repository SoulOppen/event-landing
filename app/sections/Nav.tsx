import Link from "next/link";

export default function Nav() {
  return (
    <header>

      <nav className="bg-accent mx-auto max-w-3xl rounded-3xl px-6 py-3 flex  flex-col items-center justify-between gap-4 text-sm sm:flex-row sm:text-base sm:-translate-y-1/2 sm:h-16 ">
        <div className="font-semibold tracking-wide">
          Neon Nights Live
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#features">Highlights</Link>
          </li>
          <li>
            <Link href="#tickets" className="font-medium">
              Buy tickets
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}