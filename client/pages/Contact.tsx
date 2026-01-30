import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-28">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/12 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Enterprise Platform Consulting
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
              Shift How You Build.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Scale How You Operate.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-8 md:leading-9 mb-10 max-w-2xl">
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

      {/* Core Value */}
      <section id="core-value" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                We Don't Just Digitize.{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  We Re-Architect How Things Work.
                </span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our approach combines deep expertise with innovative thinking to deliver transformative results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-left">
              {[
                "Design enterprise-grade digital platforms",
                "Replace fragmented systems with unified solutions",
                "Automate workflows across people, data, and operations",
                "Build scalable foundations using cloud, AI, and modern architecture",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-base text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Credibility */}
      <section id="founder-credibility" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Led by Experience.{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Driven by Innovation.
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-8 max-w-2xl mx-auto">
                ZeroShift is built on deep experience delivering complex digital transformation
                initiatives across large organizations. Our team brings decades of combined expertise
                in enterprise architecture, cloud transformation, and intelligent systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8">
              Ready to Shift Forward?
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-16 leading-8">
              Whether you're modernizing existing systems or building something entirely new, let's
              explore how ZeroShift can help you move faster, smarter, and with confidence.
            </p>

            {/* Single consolidated email CTA */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 p-12 mb-8 hover:bg-white/15 transition-colors">
              <p className="text-white/80 text-sm font-medium mb-4 tracking-wide uppercase">
                Get in touch
              </p>
              <a
                href="mailto:hello@zeroshift.ae"
                className="text-4xl md:text-5xl font-extrabold text-white hover:text-white/95 transition-colors block mb-6"
              >
                hello@zeroshift.ae
              </a>
              <p className="text-white/70 text-base">
                We typically respond within 24 hours
              </p>
            </div>

            {/* Additional contact methods or info */}
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              For urgent inquiries, feel free to reach out directly through email or schedule a consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
