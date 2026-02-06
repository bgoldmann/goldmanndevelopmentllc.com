import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // US-008: Legacy URL 301 redirects — add entries as legacy paths are defined
    // Example: { source: "/old-service", destination: "/services/pentesting", permanent: true },
    return [];
  },
};

export default nextConfig;
