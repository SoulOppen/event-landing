export default function Features() {
  return (
    <section
      id="features"
      className="max-w-3xl mx-auto py-12 px-4 sm:px-0 space-y-6"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left">
        Why you&apos;ll love it
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        <li className="bg-accent/60 rounded-2xl p-4">
          Live sets from three headline artists and emerging bands.
        </li>
        <li className="bg-accent/60 rounded-2xl p-4">
          Outdoor venue with food trucks, chill zones, and photo spots.
        </li>
        <li className="bg-accent/60 rounded-2xl p-4">
          Easy online ticket purchase and QR-code entry.
        </li>
        <li className="bg-accent/60 rounded-2xl p-4">
          Clear schedule, location details, and FAQ in one place.
        </li>
      </ul>
    </section>
  );
}