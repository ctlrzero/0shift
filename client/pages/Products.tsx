export default function Products() {
  const cards = [
    {
      tag: "Logistics & Delivery",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "Smart Delivery Management System",
      desc: "End-to-end delivery platform for logistics companies with real-time tracking, route optimization, and driver management.",
      features: [
        "Real-time GPS tracking & visibility",
        "Automated route optimization",
        "Proof of delivery (POD) capture",
        "Driver mobile app integration",
        "Intelligent dispatch system",
      ],
      icon: [
        "M20 8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h2v2h-2c-2.21 0-4-1.79-4-4h-4c0 2.21-1.79 4-4 4H4v-2h2c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2H4V6h2c2.21 0 4 1.79 4 4h4c0-2.21 1.79-4 4-4h2v2h-2z",
      ],
      gradient: "from-primary to-primary",
      cta: "Explore Platform",
    },
    {
      tag: "Financial Technology",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "Digital Payment Platform",
      desc: "Enterprise-grade stablecoin payment infrastructure enabling instant, secure cross-border transactions for global organizations.",
      features: [
        "Institutional-grade security",
        "Real-time settlement & reconciliation",
        "Multi-currency support",
        "Regulatory compliance built-in",
        "API-first architecture",
      ],
      icon: [
        "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
      ],
      gradient: "from-primary to-primary",
      cta: "Explore Platform",
    },
    {
      tag: "Fleet Management",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "Fleet Management & IoT Hardware",
      desc: "Complete fleet management solution with advanced IoT hardware for car rental and leasing companies. Real-time vehicle tracking and condition monitoring.",
      features: [
        "Vehicle telemetry & health monitoring",
        "Real-time GPS tracking & geofencing",
        "Fuel consumption analytics",
        "Preventive maintenance alerts",
        "Driver behavior monitoring",
      ],
      icon: [
        "M13 10V3L4 14h7v7l9-11h-7z",
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      ],
      gradient: "from-primary to-primary",
      cta: "View Solution",
    },
    {
      tag: "AI & Security",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "AI-Powered CCTV Analytics",
      desc: "Advanced AI-powered solution for CCTV surveillance systems with real-time threat detection, behavior analysis, and automated alerts.",
      features: [
        "Real-time threat detection & alerts",
        "Behavior & crowd analysis",
        "Facial recognition integration",
        "Video analytics & insights dashboard",
        "Cloud & on-premise deployment",
      ],
      icon: [
        "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M3 12c0-1.657.895-3.102 2.33-3.915A9 9 0 1015 3c-4.478 0-8.268 2.943-9.67 7.085C3.896 9.694 3 10.76 3 12z",
      ],
      gradient: "from-primary to-primary",
      cta: "Request Demo",
    },
    {
      tag: "Real Estate Platform",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "Masaken",
      desc: "Complete SaaS platform for multi-property portfolios with integrated payment processing, lease management, and tenant services.",
      features: [
        "Multi-property portfolio management",
        "Automated lease lifecycle workflows",
        "Integrated payment gateway (PCI-DSS compliant)",
        "Tenant self-service portal",
        "Advanced analytics & reporting",
      ],
      icon: [
        "M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l6 5.4V18h-2v-6H8v6H6v-6.9l6-5.4z",
      ],
      gradient: "from-primary to-primary",
      cta: "Request Demo",
    },
    {
      tag: "MSD Power App",
      tagColor: "bg-slate-50 text-slate-700 border-slate-200",
      title: "Spatium",
      desc: "Microsoft Dynamics 365 powered venue management platform enabling seamless event scheduling, resource allocation, and operational efficiency for venues and event spaces.",
      features: [
        "Integrated Dynamics 365 backend",
        "Event & booking management",
        "Resource allocation & scheduling",
        "Real-time occupancy tracking",
        "Automated billing & invoicing",
      ],
      icon: [
        "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4l1-1h4l1 1h4a2 2 0 012 2v14a2 2 0 01-2 2zM12 8a4 4 0 110 8 4 4 0 010-8z",
      ],
      gradient: "from-primary to-primary",
      cta: "Explore Platform",
    },
  ];

  return (
    <div className="bg-white">
      <section className="py-32 md:py-40 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        {/* Floating icons */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-2xl rotate-12 animate-pulse hidden lg:block" />
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-primary/10 rounded-full animate-pulse delay-75 hidden lg:block" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
            Enterprise Solutions
          </div>
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Purpose-Built Platforms for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Complex Operations
            </span>
          </h1>
          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg md:text-xl">
            Industry-leading solutions designed to meet the demanding
            requirements of enterprise organizations.
          </p>

          {/* Quick stats/features bar */}
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                text: "Fully Customizable",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                text: "Enterprise Security",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                text: "High Performance",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <span className="text-primary">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} p-0.5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-primary">
                      {card.icon.map((d, i) => (
                        <path key={i} d={d} />
                      ))}
                    </svg>
                  </div>
                </div>

                <div
                  className={`mb-4 inline-block rounded-lg border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${card.tagColor}`}
                >
                  {card.tag}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-7 mb-6">
                  {card.desc}
                </p>

                <ul className="mb-8 space-y-3 text-sm text-slate-700">
                  {card.features.map((f) => (
                    <li key={f} className="flex gap-3 relative">
                      <span className="text-primary font-bold flex-shrink-0">
                        ✓
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group/link inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all text-sm"
                >
                  {card.cta}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
