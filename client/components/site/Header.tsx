import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/85 border-b border-slate-200 shadow-lg shadow-slate-900/5"
          : "bg-white/95 border-b border-slate-100"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-5 md:px-10">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="group flex items-center transition-opacity hover:opacity-80"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4b7f413cb1bb44be90e35e6ae275f1c4%2Fa8e467b17bed496ea0756fdc9b79ed72?format=webp&width=800"
              alt="Zero Shift"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Services", href: "/services", isExternal: false },
              { label: "Products", href: "/products", isExternal: false },
              { label: "How We Work", href: "/how-we-work", isExternal: false },
            ].map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {!active && (
                    <span className="absolute bottom-1.5 left-4 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
                  )}
                </a>
              );
            })}
          </nav>
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Request Demo
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
    </header>
  );
}
