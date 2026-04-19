import { fetchBodies } from "@/lib/api";
import BodyList from "@/components/BodyList";

export default async function Home() {
  const allBodies = await fetchBodies();

  // Filter for planets, sort by size
  const planets = allBodies.filter(b => b.isPlanet).sort((a, b) => b.semimajorAxis - a.semimajorAxis);

  // Get other bodies, sort by gravity descending
  const others = allBodies.filter(b => !b.isPlanet).sort((a, b) => b.gravity - a.gravity);

  const displayBodies = [...planets, ...others];

  return (
    <main className="min-h-screen bg-neutral-950 p-4 md:p-8 text-neutral-50 flex flex-col items-center">
      <div className="w-full flex flex-col gap-8">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b-2 border-cyan-500 gap-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-cyan-400" style={{ textShadow: "0 0 12px rgba(34, 211, 238, 0.6)" }}>
            STELLAR.
          </h1>
          <div className="text-left sm:text-right">
            <h4 className="text-lg font-bold tracking-tight text-magenta-400" style={{ textShadow: "0 0 10px rgba(232, 121, 249, 0.5)" }}>
              SOLAR SYSTEM EXPLORER
            </h4>
            <p className="font-mono text-[10px] text-neutral-400 mt-1 tracking-widest uppercase">
              // Database Indexed
            </p>
          </div>
        </header>

        <BodyList displayBodies={displayBodies} />
      </div>
    </main>
  );
}
