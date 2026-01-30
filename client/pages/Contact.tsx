import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 md:py-28">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/12 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Get In Touch
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight mb-8">
              Let's{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Talk
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-8 md:leading-9">
              Have a question or ready to start your digital transformation journey? 
              We'd love to hear from you. Reach out to our team and let's discuss how 
              we can help bring your vision to life.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-20 shadow-xl">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(white,transparent)]" />

            <div className="relative">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
                  Reach Our Team
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-slate-600 mb-4">
                  We respond quickly and can tailor a conversation to your needs. 
                  Your inquiry is important to us.
                </p>
              </div>

              <div className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-8">
                  <p className="text-lg text-slate-600 text-center">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                  <a
                    href="mailto:hello@zeroshift.ae"
                    className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1"
                  >
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    hello@zeroshift.ae
                  </a>
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-screen-xl px-5 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Check out our range of services and products designed to simplify 
              complexity and drive measurable results for your organization.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/services"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-1"
              >
                View Our Services
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
                View Our Products
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
        </div>
      </section>
    </div>
  );
}
