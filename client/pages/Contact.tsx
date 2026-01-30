import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-24">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
              Shift How You Build.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Scale How You Operate.
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-8 md:leading-9 mb-10 max-w-2xl">
              ZeroShift partners with ambitious organizations to design, build, and scale digital 
              platforms that transform operations, unlock efficiency, and enable intelligent growth.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/contact#how-we-work"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1"
              >
                Book a Strategy Call
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="/products"
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary/25 bg-white/50 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
              >
                Request a Demo
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>

            <p className="text-sm text-slate-500 font-medium">
              Enterprise platforms • Cloud & AI • Secure by design
            </p>
          </div>
        </div>

        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Who We Work With */}
      <section id="who-we-work-with" className="py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-16 text-center">
            Built for Complex Organizations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Government & Authorities",
                desc: "Digital platforms, portals, and automation at scale",
                icon: "M12 18a6 6 0 100-12 6 6 0 000 12z",
              },
              {
                title: "Developers & Master Communities",
                desc: "Property, licensing, and tenant-centric systems",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.5m0 0H9.5m0 0H4m0 0h2",
              },
              {
                title: "Enterprises & Holding Groups",
                desc: "Operational systems that scale across entities",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Innovation-Driven Teams",
                desc: "From MVP to mission-critical platforms",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value */}
      <section id="core-value" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
                We Don't Just Digitize.{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  We Re-Architect How Things Work.
                </span>
              </h2>

              <ul className="space-y-4">
                {[
                  "Design enterprise-grade digital platforms",
                  "Replace fragmented systems with unified solutions",
                  "Automate workflows across people, data, and operations",
                  "Build scalable foundations using cloud, AI, and modern architecture",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-96">
                <svg className="w-48 h-48 text-primary/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Credibility */}
      <section id="founder-credibility" className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
                Led by Experience.{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Driven by Innovation.
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-8 mb-8">
                ZeroShift is built on deep experience delivering complex digital transformation 
                initiatives across large organizations. Our team brings decades of combined expertise 
                in enterprise architecture, cloud transformation, and intelligent systems.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Enterprise Platforms",
                  "Digital Transformation",
                  "Cloud & AI",
                  "Secure Architecture",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl p-12 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-slate-600 font-semibold">Innovation at Scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent)]" />

        <div className="relative mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Ready to Shift Forward?
            </h2>

            <p className="text-lg text-white/90 mb-12 leading-8">
              Whether you're modernizing existing systems or building something entirely new, let's 
              explore how ZeroShift can help you move faster, smarter, and with confidence.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@zeroshift.ae"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/20 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                Book a Strategy Call
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@zeroshift.ae"
                className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:border-white/50 hover:bg-white/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@zeroshift.ae
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
