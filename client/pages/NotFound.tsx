import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(white,transparent)] -z-10" />

      <div className="text-center px-4">
        <div className="mb-8 inline-flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-emerald-700/10">
          <div className="text-7xl font-extrabold bg-gradient-to-r from-primary to-emerald-700 bg-clip-text text-transparent">
            404
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          Return to Home
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
