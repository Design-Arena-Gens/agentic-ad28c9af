const worlds = [
  {
    name: "Aurora Meridian",
    subtitle: "The Harmonic Threshold",
    description:
      "A twin world where sound becomes architecture. Resonant cities float across a cobalt sky, each skyline tuned to the pulse of its twin.",
    climate: "Fractal aurora belts; stable equatorial bloom",
    energy: "Symphonic wave harvesters, quantum echo cores",
    twin: "Mirrors Solstice Tenebris every 17 hours",
    accent: "from-violet-500/30 via-sky-400/20 to-cyan-400/30",
  },
  {
    name: "Solstice Tenebris",
    subtitle: "The Shadow Archive",
    description:
      "Deep within the mirrored hemisphere, libraries of living stone record every ray their twin reflects. Nights glow with mnemonic fireflies.",
    climate: "Perpetual dusk, luminescent flora throughout",
    energy: "Graviton wells braided with bio-lantern reefs",
    twin: "Locks orbit with Aurora Meridian",
    accent: "from-indigo-600/40 via-purple-500/30 to-fuchsia-500/30",
  },
  {
    name: "Isola Caelestis",
    subtitle: "The Drifted Sanctuaries",
    description:
      "Archipelagos levitate above a sapphire ocean, each isle bound to a twin below through braided waterfalls of compressed starlight.",
    climate: "Buoyant, temperate stratosphere; crystalline trade winds",
    energy: "Atmospheric tide engines, solar lace collectors",
    twin: "Anchored by Abyssal Helix",
    accent: "from-emerald-500/35 via-teal-400/25 to-cyan-300/25",
  },
  {
    name: "Abyssal Helix",
    subtitle: "The Resonant Deep",
    description:
      "Subsurface caverns spiral beneath luminous oceans. Choir reefs respond to movements above, preserving balance between both worlds.",
    climate: "Bioluminescent oceans; geothermal bloom chambers",
    energy: "Tidal resonance lattices, luminous kelp reactors",
    twin: "Whispers to Isola Caelestis",
    accent: "from-sky-500/35 via-blue-500/25 to-indigo-500/35",
  },
];

const timeline = [
  {
    phase: "I",
    label: "First Alignment",
    description:
      "Orbit archivists record the synchronization of twin horizons; rifts open to allow the first voyagers to step between skies.",
    highlights: ["Resonance gates ignite", "Empath pilots trained"],
  },
  {
    phase: "II",
    label: "Shared Cartography",
    description:
      "Atlas drones weave layered charts binding light, memory, and topography into a single navigational weave.",
    highlights: ["Sentient star maps", "Cross-world diplomacy blooms"],
  },
  {
    phase: "III",
    label: "Tidal Accord",
    description:
      "Energy tides reach equilibrium. Twin ecosystems begin cross-pollinating, guided by caretakers of the Gemini Conclave.",
    highlights: ["Inter-world harvest exchange", "Symbiosis accords signed"],
  },
  {
    phase: "IV",
    label: "Celestial Renaissance",
    description:
      "Art, science, and myth converge. Travelers compose twin myths, weaving a culture that belongs to both skies at once.",
    highlights: ["World chorus unveiled", "Constellation colloquium founded"],
  },
];

const experiences = [
  {
    title: "Portal Pilgrimages",
    description:
      "Curated crossings pair explorers with their luminous reflections, revealing divergent outcomes in shared destinies.",
    tone: "from-fuchsia-500/30 to-amber-400/30",
  },
  {
    title: "Chrono Gardens",
    description:
      "Walk through mirrored seasons grown in parallel time. Each bloom answers with harmonic light from its twin.",
    tone: "from-emerald-400/30 to-teal-300/30",
  },
  {
    title: "Story Forge",
    description:
      "Collide perspectives with the Conclave’s narrative engines, crafting legends that exist across both realities.",
    tone: "from-sky-500/30 to-indigo-500/30",
  },
];

const stats = [
  { label: "Habitats harmonized", value: "16 twin clusters" },
  { label: "Explorers initiated", value: "4,218 voyagers" },
  { label: "Resonant passages", value: "72 per lunar arc" },
];

const signalMetrics = [
  { label: "Pulse", value: "42" },
  { label: "Drift", value: "58" },
  { label: "Weave", value: "73" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="interstellar-grid" />
      <main className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-28 pt-20 sm:px-10 lg:px-16">
        <section className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,1fr)] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur">
              <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(68,230,255,0.7)]" />
              Gemini Conclave Transmission
            </div>
            <header className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Gemini Worlds
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/70 sm:text-xl">
                Traverse twin realities woven in luminous resonance. Gemini
                Worlds is a living atlas for seekers who believe stories become
                real when mirrored across the stars.
              </p>
            </header>
            <div className="flex flex-wrap gap-4">
              <a
                href="#worlds"
                className="inline-flex items-center gap-3 rounded-full bg-white/90 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                Enter the Atlas
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-slate-950 text-white">
                  →
                </span>
              </a>
              <a
                href="#chronicles"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                Watch the Resonance
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-white/20">
                  ◎
                </span>
              </a>
            </div>
            <dl className="grid gap-6 text-sm sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/70 backdrop-blur"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="pulse-nebula absolute inset-0 rounded-[36px] bg-gradient-to-br from-indigo-500/35 via-cyan-400/25 to-fuchsia-500/35 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-lg">
              <div className="absolute inset-x-12 -top-20 rounded-full bg-white/10 blur-3xl" />
              <div className="relative grid gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/80 shadow-[0_18px_36px_rgba(26,35,126,0.18)]">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                    Twin Signal
                  </p>
                  “You stand between reflections. Breathe. Let both skies
                  answer.”
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {signalMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 px-4 py-5 text-white/70"
                    >
                      <p className="text-xs uppercase tracking-[0.3em]">
                        {metric.label}
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.08] px-6 py-5 text-sm text-white/70">
                  Upcoming alignment <span className="text-white">+03:12:47</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="worlds" className="space-y-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200/70">
                Twin Cartography
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Explore the paired realms
              </h2>
              <p className="mt-3 max-w-2xl text-base text-white/65">
                Anchor your journey with Gemini clusters. Each world breathes in
                tandem with its twin, balanced through resonance accords and
                living architecture.
              </p>
            </div>
            <a
              href="#chronicles"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/35 hover:text-white"
            >
              Orbit Chronicle
              <span className="text-sm">↗</span>
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {worlds.map((world) => (
              <article
                key={world.name}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_18px_44px_rgba(22,27,60,0.35)] transition hover:border-white/25 hover:shadow-[0_24px_60px_rgba(32,46,120,0.4)]"
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 -top-36 h-56 bg-gradient-to-br ${world.accent} blur-3xl`}
                />
                <div className="relative space-y-5 text-white/75">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                        Gemini Cluster
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {world.name}
                      </h3>
                    </div>
                    <span className="inline-flex h-10 items-center rounded-full border border-white/15 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                      {world.subtitle}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{world.description}</p>
                  <dl className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs uppercase tracking-[0.2em] text-white/50 sm:grid-cols-3">
                    <div>
                      <dt>Climate</dt>
                      <dd className="mt-2 text-sm normal-case tracking-normal text-white/75">
                        {world.climate}
                      </dd>
                    </div>
                    <div>
                      <dt>Energy</dt>
                      <dd className="mt-2 text-sm normal-case tracking-normal text-white/75">
                        {world.energy}
                      </dd>
                    </div>
                    <div>
                      <dt>Twin Link</dt>
                      <dd className="mt-2 text-sm normal-case tracking-normal text-white/75">
                        {world.twin}
                      </dd>
                    </div>
                  </dl>
                  <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 transition hover:border-white/35 hover:text-white">
                    View resonance map
                    <span aria-hidden className="text-base">
                      ↻
                    </span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="chronicles"
          className="relative overflow-hidden rounded-[44px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-12 text-white shadow-[0_24px_64px_rgba(20,24,64,0.35)] sm:p-16"
        >
          <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-cyan-400/10 to-transparent blur-3xl" />
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Resonance Chronicle
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                The alignment sequence
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70">
                Follow the cadence that guides every crossing. As the worlds
                breathe together, travelers trace the constellation path from
                first alignment to the renaissance chorus.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              Sync Index
              <span className="inline-flex items-center justify-center rounded-full bg-white/20 px-3 py-1 text-white">
                98.2%
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {timeline.map((entry) => (
              <div
                key={entry.phase}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 text-white/70 transition hover:border-white/30 hover:text-white"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-[100%] bg-white/10" />
                <div className="relative flex flex-col gap-5">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-white/30 text-sm font-semibold text-white">
                    {entry.phase}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {entry.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed">
                      {entry.description}
                    </p>
                  </div>
                  <ul className="grid gap-3 text-xs uppercase tracking-[0.25em] text-white/55 sm:grid-cols-2">
                    {entry.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="rounded-full border border-white/15 px-4 py-2 text-center text-white/70"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,1fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              Immersion Offerings
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Share a moment with your mirrored self
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              Constellation curators choreograph each encounter. Traverse
              luminous bridges, gather twin artifacts, and compose a story that
              hums across both worlds.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {experiences.map((experience) => (
                <div
                  key={experience.title}
                  className={`relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br ${experience.tone} p-6 text-white/80 transition hover:border-white/35 hover:text-white`}
                >
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                  <div className="relative space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Experience
                    </p>
                    <h3 className="text-lg font-semibold text-white">
                      {experience.title}
                    </h3>
                    <p className="text-sm leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[36px] border border-white/10 bg-white/5 p-8 text-white/75 shadow-[0_18px_56px_rgba(22,28,74,0.4)]">
            <div className="absolute inset-0 rounded-[36px] border border-white/20 opacity-30" />
            <div className="relative space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
                Conclave Broadcast
              </p>
              <blockquote className="text-lg leading-relaxed text-white/80">
                “We charted potential, and found ourselves reflected on every
                horizon. Gemini Worlds is the promise that every story has a
                twin worth discovering.”
              </blockquote>
              <p className="text-sm font-semibold text-white">
                Archivist Lira Halden
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Keeper of Parallel Lore
              </p>
              <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-xs uppercase tracking-[0.25em] text-white/60">
                <div className="flex items-center justify-between">
                  <span>Stellar Drift</span>
                  <span className="text-base font-semibold tracking-normal text-white">
                    1.6°
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Portal Flux</span>
                  <span className="text-base font-semibold tracking-normal text-white">
                    12.8v
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Echo Throughput</span>
                  <span className="text-base font-semibold tracking-normal text-white">
                    87%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/25 via-purple-500/20 to-cyan-400/25 p-12 shadow-[0_28px_64px_rgba(28,34,96,0.5)] sm:p-16 lg:p-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)] opacity-70" />
          <div className="relative flex flex-col gap-8 text-white sm:items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
              Final Invitation
            </p>
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">
              Align with your mirrored tomorrow
            </h2>
            <p className="max-w-3xl text-center text-base leading-relaxed text-white/80">
              Step through a resonance gate, carry back a piece of your reflected
              future, and weave a legend that sings in two worlds. The Gemini
              Conclave keeps a portal open for those who arrive with wonder.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#worlds"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(16,20,44,0.35)] transition hover:bg-white/90"
              >
                Schedule Alignment
                <span aria-hidden className="text-lg">
                  ✶
                </span>
              </a>
              <a
                href="mailto:conclave@gemini-worlds.io"
                className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              >
                Request Lore Codex
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
