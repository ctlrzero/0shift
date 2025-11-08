import { useQuery } from "@tanstack/react-query";

const BUILDER_API_KEY = import.meta.env.VITE_BUILDER_API_KEY;
const BUILDER_API_URL = "https://api.builder.io/v2/content";

interface BuilderContent {
  id: string;
  name?: string;
  data?: Record<string, any>;
  meta?: Record<string, any>;
}

interface FetchOptions {
  limit?: number;
  offset?: number;
  sort?: string;
  query?: Record<string, any>;
}

export function useBuilderContent(
  modelName: string,
  options: FetchOptions = {}
) {
  return useQuery({
    queryKey: ["builder", modelName, options],
    queryFn: async () => {
      const params = new URLSearchParams({
        apiKey: BUILDER_API_KEY || "",
        limit: String(options.limit || 100),
        offset: String(options.offset || 0),
      });

      if (options.query) {
        params.append("query", JSON.stringify(options.query));
      }

      const response = await fetch(
        `${BUILDER_API_URL}/${modelName}?${params}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch Builder content: ${response.statusText}`
        );
      }

      const data = await response.json();
      return (data.results || []) as BuilderContent[];
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
}

export function useBuilderSingleContent(modelName: string, id?: string) {
  return useQuery({
    queryKey: ["builder", modelName, id],
    queryFn: async () => {
      const params = new URLSearchParams({
        apiKey: BUILDER_API_KEY || "",
        limit: "1",
      });

      if (id) {
        params.append("query", JSON.stringify({ id }));
      }

      const response = await fetch(
        `${BUILDER_API_URL}/${modelName}?${params}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch Builder content: ${response.statusText}`
        );
      }

      const data = await response.json();
      return data.results?.[0] as BuilderContent | undefined;
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
    enabled: !!id,
  });
}
