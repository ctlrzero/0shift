import { useBuilderContent } from "@/hooks/use-builder-cms";
import { Skeleton } from "@/components/ui/skeleton";

interface CMSService {
  id: string;
  data: {
    title: string;
    description: string;
    shortDescription?: string;
    features?: string[];
    order?: number;
  };
}

interface ServicesListProps {
  fallbackServices?: Array<{
    n: string;
    t: string;
    d: string;
    paths: string[];
    color: string;
    features: string[];
  }>;
  onServicesLoad?: (services: CMSService[]) => void;
}

export default function ServicesList({
  fallbackServices = [],
  onServicesLoad,
}: ServicesListProps) {
  const { data: cmsServices, isLoading, error } = useBuilderContent("service", {
    limit: 100,
  });

  if (error) {
    console.error("Failed to load CMS services:", error);
  }

  const services = cmsServices && cmsServices.length > 0 ? (cmsServices as CMSService[]) : null;

  if (services) {
    onServicesLoad?.(services);
  }

  if (isLoading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 p-8">
            <Skeleton className="h-16 w-16 rounded-xl mb-6" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>
    );
  }

  if (!services || services.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="group relative rounded-2xl border-2 border-slate-200 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2"
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="relative">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 p-0.5 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 fill-primary"
                  >
                    <path d="M12 2l-5.5 9h11z" />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {service.data.title}
            </h3>
            <p className="text-sm text-slate-600 leading-7 mb-6">
              {service.data.description}
            </p>

            {service.data.features && service.data.features.length > 0 && (
              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {service.data.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-xs text-slate-500"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <a
              href="#contact"
              className="mt-6 group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
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
        </div>
      ))}
    </div>
  );
}
