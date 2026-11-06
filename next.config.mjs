import sections from "./src/lib/sections.json" with { type: "json" };

// Every section lives on the home page. Clean paths such as /why serve the
// home page, and SectionRouter scrolls to the matching section.
// The first path in each list is the one shown in the address bar; the
// others are aliases that redirect to it.

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return Object.values(sections).map(([path]) => ({ source: `/${path}`, destination: "/" }));
  },
  async redirects() {
    return Object.values(sections).flatMap(([path, ...aliases]) =>
      aliases.map((alias) => ({ source: `/${alias}`, destination: `/${path}`, permanent: true })),
    );
  },
};

export default nextConfig;
