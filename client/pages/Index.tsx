import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ContactForm from "@/components/site/ContactForm";

export default function Index() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-28">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="animate-fade-in-up relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/12 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Next-Gen Enterprise Solutions
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
                Simplifying{" "}
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Complexity
                </span>{" "}
                Through Intelligent Design
              </h1>

              <div className="mt-8 text-lg md:text-xl text-slate-600 leading-8 md:leading-9 space-y-5">
                <p>
                  We transform complex business challenges into elegant,
                  intelligent solutions. Our design-driven approach combines{" "}
                  <strong className="text-slate-900 font-semibold">
                    cutting-edge technology
                  </strong>{" "}
                  with strategic thinking to deliver systems that are powerful
                  yet intuitive.
                </p>
                <p>
                  From concept to implementation, we focus on clarity,
                  efficiency, and impact. We build solutions and provide
                  technologies that scale with your business and evolve with
                  your needs,{" "}
                  <strong className="text-slate-900 font-semibold">
                    making the complex simple
                  </strong>{" "}
                  for your organization and your customers.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1"
                >
                  Schedule Consultation
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
                  Explore Solutions
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
            </div>

            {/* Right Column */}
            <div className="relative hidden md:block">
              <div className="grid grid-cols-2 gap-6">
                {/* Top Left Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
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
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-slate-600">
                    Projects Delivered
                  </div>
                </div>

                {/* Top Right Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
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
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-slate-600">Uptime SLA</div>
                </div>

                {/* Bottom Left Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>

                {/* Bottom Right Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 hover:shadow-2xl transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-slate-600">Expert Team</div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Integration & Collaboration */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors mb-6">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Smart Integration & Collaboration
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              Seamless{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                integration
              </span>{" "}
              meets intelligent{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                automation
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
              Real-time synchronization, intelligent workflows, and
              collaborative development environments that empower your teams to
              ship faster.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Code/Dashboard Visual */}
            <div className="relative">
              <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                {/* Code Editor Header */}
                <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 font-mono ml-4">
                    collaboration.api.ts
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                  <div className="space-y-3 text-slate-300">
                    <div>
                      <span className="text-cyan-400">export</span>{" "}
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-blue-400">syncTeamWorkflow</span>{" "}
                      <span className="text-slate-400">=</span>{" "}
                      <span className="text-yellow-400">async</span>{" "}
                      <span className="text-slate-400">()</span>{" "}
                      <span className="text-slate-400">=&gt;</span>{" "}
                      <span className="text-slate-400">&#123;</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">const</span>{" "}
                      <span className="text-blue-400">updates</span>{" "}
                      <span className="text-slate-400">=</span>{" "}
                      <span className="text-cyan-400">await</span>{" "}
                      <span className="text-blue-400">fetchRealTimeData</span>
                      <span className="text-slate-400">()</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-cyan-400">return</span>{" "}
                      <span className="text-blue-400">optimizeAndDeploy</span>
                      <span className="text-slate-400">(</span>
                      <span className="text-blue-400">updates</span>
                      <span className="text-slate-400">)</span>
                    </div>
                    <div>
                      <span className="text-slate-400">&#125;</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="text-green-400 text-xs flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Deployment successful
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-slate-200 backdrop-blur-sm max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
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
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      API Active
                    </p>
                    <p className="text-xs text-slate-500">
                      All systems operational
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Metrics */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 mb-6">
                  Key Performance Metrics
                </p>
                <div className="space-y-6">
                  {[
                    {
                      metric: "+72%",
                      label: "Faster Deployment Cycles",
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    },
                    {
                      metric: "<100ms",
                      label: "API Response Time",
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    },
                    {
                      metric: "99.95%",
                      label: "Infrastructure Uptime",
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    },
                    {
                      metric: "150+",
                      label: "Integrations Supported",
                      icon: "M13 10V3L4 14h7v7l9-11h-7z",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl md:text-4xl font-bold text-slate-900">
                          {item.metric}
                        </div>
                        <div className="text-sm text-slate-600 mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1"
                >
                  Explore Integration Options
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-32 bg-gradient-to-b from-white to-slate-50 scroll-mt-24 relative overflow-hidden"
      >
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors">
              Professional Services
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              End-to-End Digital
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg md:text-xl">
              Strategic consulting and implementation services to drive
              measurable business outcomes.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                n: "01",
                t: "AI & Automation",
                d: "Deploy intelligent automation to optimize operations, reduce costs, and accelerate decision-making across your organization.",
                paths: [
                  "M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zm-2 10H6V7h12v12z",
                  "M12 13a2 2 0 110-4 2 2 0 010 4z",
                ],
                color: "from-primary to-primary",
              },
              {
                n: "02",
                t: "Enterprise Architecture",
                d: "Design scalable, secure, and resilient technology architectures that support long-term business growth and innovation.",
                paths: [
                  "M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z",
                ],
                color: "from-primary to-primary",
              },
              {
                n: "03",
                t: "Security & Compliance",
                d: "Comprehensive security frameworks and compliance management for regulated industries and government organizations.",
                paths: [
                  "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
                ],
                color: "from-primary to-primary",
              },
              {
                n: "04",
                t: "Data & Analytics",
                d: "Turn data into strategic advantage with advanced analytics, business intelligence, and predictive modeling solutions.",
                paths: [
                  "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
                  "M7 12h2v5H7zm4-3h2v8h-2zm4-3h2v11h-2z",
                ],
                color: "from-primary to-primary",
              },
              {
                n: "05",
                t: "Cloud Migration",
                d: "Seamless migration to cloud infrastructure with zero downtime, optimized costs, and enhanced performance.",
                paths: [
                  "M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6v2c-1.82 0-3.41.88-4.41 2.23C6.94 10.77 6.48 11 6 11c-1.66 0-3 1.34-3 3s1.34 3 3 3h13c1.1 0 2-.9 2-2s-.9-2-2-2h-1.5v-.5c0-2.76-2.24-5-5-5z",
                ],
                color: "from-primary to-primary",
              },
              {
                n: "06",
                t: "Strategic Consulting",
                d: "Executive-level technology strategy and digital roadmap development aligned with business objectives.",
                paths: [
                  "M12 2l-5.5 9h11z",
                  "M17.5 13a4.5 4.5 0 110 9 4.5 4.5 0 010-9z",
                  "M3 13.5h8v8H3z",
                ],
                color: "from-primary to-primary",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-2"
              >
                <div
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-20 blur"
                  style={{
                    background: `linear-gradient(to bottom right, var(--color-primary))`,
                  }}
                />

                <div className="relative">
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 p-0.5 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                        <svg
                          viewBox="0 0 24 24"
                          className="h-7 w-7 fill-primary"
                        >
                          {s.paths.map((d, i) => (
                            <path key={i} d={d} />
                          ))}
                        </svg>
                      </div>
                    </div>
                    <div className="text-6xl font-bold text-slate-100 select-none">
                      {s.n}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {s.t}
                  </h3>
                  <p className="text-sm text-slate-600 leading-7">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section
        id="solutions"
        className="py-24 scroll-mt-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-primary hover:bg-primary/12 transition-colors mb-6">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              How We Work
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              A clear path from{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                idea to impact
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-8">
              Our proven methodology guides your organization through every
              stage of digital transformation, from discovery to optimization.
              We combine strategic vision, modern technology, and hands-on
              execution to deliver measurable results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                t: "Discover",
                d: "We align on objectives, constraints, and success metrics with leadership and stakeholders.",
                icon: [
                  "M12 2l9 4-9 4-9-4 9-4zm0 6l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z",
                ],
                color: "from-blue-500 to-blue-600",
              },
              {
                t: "Design",
                d: "We prototype rapidly and validate with users to reduce risk and maximize adoption.",
                icon: ["M3 3h18v18H3V3zm4 4h10v10H7V7z"],
                color: "from-purple-500 to-purple-600",
              },
              {
                t: "Deliver",
                d: "We build, ship, and iterate with measurable business outcomes and clear KPIs.",
                icon: ["M5 13l4 4L19 7"],
                color: "from-green-500 to-green-600",
              },
              {
                t: "Evolve",
                d: "We monitor, learn, and optimize continuously to maximize long‑term value.",
                icon: ["M12 2a10 10 0 100 20 10 10 0 000-20z"],
                color: "from-orange-500 to-orange-600",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="group relative rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 flex flex-col h-full"
              >
                <div
                  className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white">
                    {s.icon.map((d, i) => (
                      <path key={i} d={d} />
                    ))}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.t}</h3>
                <p className="text-sm text-slate-600 leading-6 flex-grow">
                  {s.d}
                </p>
                <a
                  href="#contact"
                  className="mt-4 group/link inline-flex items-center gap-2 text-xs font-semibold text-primary hover:gap-3 transition-all"
                >
                  Learn more
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

          <div className="mt-12 text-center">
            <a
              href="/how-we-work"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary/20 bg-white px-8 py-4 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/5"
            >
              Explore Our Full Process
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 scroll-mt-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

        <div className="mx-auto max-w-screen-xl px-5 md:px-10 relative z-10">
          <div className="text-center mb-12">
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              FAQs
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Common{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                questions
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Quick answers to help you understand how we work
            </p>
          </div>
          <div className="mx-auto max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How fast can we get to value?
                </AccordionTrigger>
                <AccordionContent>
                  Most clients see first release within 4–6 weeks and measurable
                  impact in the first quarter.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Do you integrate with our stack?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. We integrate with modern clouds, data platforms, and
                  enterprise systems with security best practices.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What about security and compliance?
                </AccordionTrigger>
                <AccordionContent>
                  We follow strict SDLC, least-privilege access, and align with
                  industry standards. We’ll map to your governance.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 scroll-mt-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-20 shadow-xl">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(white,transparent)]" />

            <div className="relative">
              <div className="text-center mb-12">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                  Get In Touch
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Let's Talk
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-4">
                  Reach our team directly. We respond quickly and can tailor a
                  conversation to your needs.
                </p>
              </div>

              <ContactForm />

              <div className="mt-12 border-t border-slate-200 pt-12 grid max-w-3xl gap-4 md:grid-cols-3 text-left mx-auto">
                <div className="rounded-xl p-5 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:hello@zeroshift.ae"
                    className="text-slate-900 font-semibold hover:text-primary transition-colors"
                  >
                    hello@zeroshift.ae
                  </a>
                </div>
                <div className="rounded-xl p-5 text-center">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                    Office Location
                  </div>
                  <div className="text-slate-900 font-semibold text-sm">
                    UAE, Dubai, Ras Alkhor
                    <br />
                    Almosawi Building Office 107
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
