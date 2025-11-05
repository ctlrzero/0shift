export default function HowWeWork() {
  return (
    <div className="bg-white">
      <section className="py-32 md:py-40 scroll-mt-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />

        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-20 h-20 border-2 border-primary/10 rounded-full hidden lg:block" />
        <div className="absolute top-60 right-10 w-16 h-16 bg-primary/5 rounded-2xl rotate-45 hidden lg:block" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              How We Work
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">A clear path from <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">idea to impact</span></h2>
            <div className="mt-10 mx-auto max-w-4xl text-slate-700 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-xl font-bold tracking-wide text-slate-900 mb-4">Our Philosophy</h3>
                <p className="text-lg leading-8">
                  At Zero Shift Innovation, we believe technology should simplify — not complicate — your business. Our approach is built around efficiency, transparency, and agility, ensuring that every solution we deliver improves your processes, reduces bureaucracy, and accelerates real results.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 mb-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Our Proven Process</h3>
            <p className="mt-3 text-slate-600">Four strategic phases to ensure successful digital transformation</p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Discover",
                d: "We align on objectives, constraints, and success metrics with leadership and stakeholders.",
                icon: ["M12 2l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z"],
                num: "01",
                details: ["Stakeholder interviews", "Business analysis", "Goal setting"]
              },
              {
                t: "Design",
                d: "We prototype rapidly and validate with users to reduce risk and maximize adoption.",
                icon: ["M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"],
                num: "02",
                details: ["Architecture design", "Rapid prototyping", "User validation"]
              },
              {
                t: "Deliver",
                d: "We build, ship, and iterate with measurable business outcomes and clear KPIs.",
                icon: ["M5 13l4 4L19 7"],
                num: "03",
                details: ["Agile development", "Quality assurance", "Deployment"]
              },
              {
                t: "Evolve",
                d: "We monitor, learn, and optimize continuously to maximize long‑term value.",
                icon: ["M12 2C9.24 2 7 4.24 7 7c0 2.85 2.92 7.21 5 9.88 2.11-2.69 5-7.05 5-9.88 0-2.76-2.24-5-5-5zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z", "M11 20h2v2h-2z", "M9 18h6v2H9z"],
                num: "04",
                details: ["Performance monitoring", "Continuous optimization", "Support"]
              },
            ].map((s, idx) => (
              <div key={s.t} className="relative">
                {/* Connection line to next item */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent z-0" />
                )}

                <div className="group relative rounded-2xl border-2 border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2 h-full">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {s.num}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-primary/10">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-primary">
                      {s.icon.map((d,i) => (<path key={i} d={d} />))}
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.t}</h3>
                  <p className="text-sm text-slate-600 leading-7 mb-4">{s.d}</p>

                  {/* Details list */}
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {s.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
