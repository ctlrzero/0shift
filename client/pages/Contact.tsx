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
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
              We Don't Just Digitize.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                We Re-Architect How Things Work.
              </span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              {[
                "Design enterprise-grade digital platforms",
                "Replace fragmented systems with unified solutions",
                "Automate workflows across people, data, and operations",
                "Build scalable foundations using cloud, AI, and modern architecture",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-slate-700 bg-white rounded-xl p-4 border border-slate-100">
                  <svg className="w-6 h-6 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Credibility */}
      <section id="founder-credibility" className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
              Led by Experience.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Driven by Innovation.
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-8 mb-10 max-w-2xl mx-auto">
              ZeroShift is built on deep experience delivering complex digital transformation
              initiatives across large organizations. Our team brings decades of combined expertise
              in enterprise architecture, cloud transformation, and intelligent systems.
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "Enterprise Platforms",
                "Digital Transformation",
                "Cloud & AI",
                "Secure Architecture",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-block px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
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

            {/* Single consolidated email CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30 p-8 mb-6">
              <p className="text-white/90 text-sm font-medium mb-4">
                Get in touch with our team
              </p>
              <a
                href="mailto:hello@zeroshift.ae"
                className="text-3xl md:text-4xl font-bold text-white hover:text-white/90 transition-colors"
              >
                hello@zeroshift.ae
              </a>
              <p className="text-white/70 text-sm mt-4">
                We typically respond within 24 hours
              </p>
            </div>

            {/* Optional: Additional contact methods or info */}
            <p className="text-white/60 text-sm">
              For urgent inquiries, feel free to call us directly or schedule a meeting through email.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
