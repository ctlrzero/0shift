export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.1))]" />

      <div className="relative mx-auto max-w-screen-xl px-5 md:px-10 py-16">
        <div className="grid gap-12 md:grid-cols-3 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-sm font-bold mb-4 text-white">
              Zero Shift Technologies
            </h3>
            <p className="text-sm text-slate-400 leading-7">
              Enterprise-grade digital solutions for global organizations.
              Delivering transformation, efficiency, and measurable business
              impact.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="/products"
                >
                  Enterprise Products
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="/services"
                >
                  Professional Services
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="/how-we-work"
                >
                  How We Work
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="#contact"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="/careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-primary"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500">
            © 2025 Zero Shift Innovation. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Enterprise Solutions Provider
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
