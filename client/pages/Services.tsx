export default function Services() {
  const services = [
    { 
      n: "01", 
      t: "AI & Automation", 
      d: "Deploy intelligent automation to optimize operations, reduce costs, and accelerate decision-making across your organization.", 
      paths: ["M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12z","M12 13a2 2 0 110-4 2 2 0 010 4z"], 
      color: "from-primary to-primary",
      features: ["Process automation", "Machine learning integration", "Intelligent workflows"]
    },
    { 
      n: "02", 
      t: "Enterprise Architecture", 
      d: "Design scalable, secure, and resilient technology architectures that support long-term business growth and innovation.", 
      paths: ["M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"], 
      color: "from-primary to-primary",
      features: ["System design", "Scalability planning", "Technology roadmaps"]
    },
    { 
      n: "03", 
      t: "Security & Compliance", 
      d: "Comprehensive security frameworks and compliance management for regulated industries and government organizations.", 
      paths: ["M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"], 
      color: "from-primary to-primary",
      features: ["Compliance frameworks", "Security audits", "Risk management"]
    },
    { 
      n: "04", 
      t: "Data & Analytics", 
      d: "Turn data into strategic advantage with advanced analytics, business intelligence, and predictive modeling solutions.", 
      paths: ["M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z","M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z"], 
      color: "from-primary to-primary",
      features: ["Business intelligence", "Predictive analytics", "Data visualization"]
    },
    { 
      n: "05", 
      t: "Cloud Migration", 
      d: "Seamless migration to cloud infrastructure with zero downtime, optimized costs, and enhanced performance.", 
      paths: ["M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6v2c-1.82 0-3.41.88-4.41 2.23C6.94 10.77 6.48 11 6 11c-1.66 0-3 1.34-3 3s1.34 3 3 3h13c1.1 0 2-.9 2-2s-.9-2-2-2h-1.5v-.5c0-2.76-2.24-5-5-5z"], 
      color: "from-primary to-primary",
      features: ["Zero-downtime migration", "Cost optimization", "Performance tuning"]
    },
    {
      n: "06",
      t: "Strategic Consulting",
      d: "Executive-level technology strategy and digital roadmap development aligned with business objectives.",
      paths: ["M12 2l-5.5 9h11z","M17.5 13a4.5 4.5 0 110 9 4.5 4.5 0 010-9z","M3 13.5h8v8H3z"],
      color: "from-primary to-primary",
      features: ["Digital strategy", "Technology roadmaps", "Executive advisory"]
    },
    {
      n: "07",
      t: "AI CCTV Solution",
      d: "Intelligent video surveillance powered by AI for real-time threat detection, automated monitoring, and enhanced security insights.",
      paths: ["M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"],
      color: "from-primary to-primary",
      features: ["AI-powered detection", "Real-time alerts", "24/7 monitoring", "Advanced analytics"]
    },
    {
      n: "08",
      t: "Custom Software Development",
      d: "Tailored software solutions built from the ground up to meet your unique business requirements and scale with your growth.",
      paths: ["M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"],
      color: "from-primary to-primary",
      features: ["Full-stack development", "Agile methodology", "Scalable architecture", "Ongoing support"]
    },
    {
      n: "09",
      t: "ERP Implementation",
      d: "End-to-end enterprise resource planning system deployment, integration, and optimization to streamline operations and improve efficiency.",
      paths: ["M9 12l2 2 4-4M7 20H5a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v11m0 0V9a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2h-4a2 2 0 01-2-2z"],
      color: "from-primary to-primary",
      features: ["System implementation", "Data migration", "Process optimization", "Training & support"]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-white to-slate-50 scroll-mt-24 relative overflow-hidden">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 border-2 border-primary/10 rounded-2xl rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-primary/5 rounded-full hidden lg:block" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Professional Services
            </div>
            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              End-to-End Digital<br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg md:text-xl">
              Strategic consulting and implementation services to drive measurable business outcomes.
            </p>

            {/* Quick benefits */}
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {[
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, text: "Fast Implementation" },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, text: "Enterprise Security" },
                { icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, text: "Measurable Results" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <span className="text-primary">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.t} className="group relative rounded-2xl border-2 border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 p-0.5 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                        <svg viewBox="0 0 24 24" className="h-8 w-8 fill-primary">
                          {s.paths.map((d, i) => (
                            <path key={i} d={d} />
                          ))}
                        </svg>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-slate-100 group-hover:text-primary/20 transition-colors select-none">{s.n}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{s.t}</h3>
                  <p className="text-sm text-slate-600 leading-7 mb-6">{s.d}</p>

                  {/* Features list */}
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {s.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="mt-6 group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                    Learn more
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/90 px-8 py-20 text-center shadow-2xl">
            <div className="absolute inset-0 bg-grid-white/[0.05]" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-white/90 mb-10">
                Let's discuss how our services can drive measurable results for your organization.
              </p>

              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-semibold text-primary shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
                >
                  Schedule Consultation
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="/how-we-work"
                  className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/20 hover:border-white/50"
                >
                  Learn Our Process
                  <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
