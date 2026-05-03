/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
        ],
      },
    ];
  },

  // npdengineering.com -> hitmakerengineering.com (308). Vercel can also do
  // this at the domain layer; this keeps the redirect in code as a fallback
  // and so it survives any project re-link.
  //
  // Service slug redirects preserve inbound links from the previous
  // functional-silo /services structure to the new lifecycle-phase structure.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "npdengineering.com" }],
        destination: "https://hitmakerengineering.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.npdengineering.com" }],
        destination: "https://hitmakerengineering.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.hitmakerengineering.com" }],
        destination: "https://hitmakerengineering.com/:path*",
        permanent: true,
      },
      {
        source: "/services/regulatory-quality",
        destination: "/services/design-controls",
        permanent: true,
      },
      {
        source: "/services/combination-products",
        destination: "/services/design-controls",
        permanent: true,
      },
      {
        source: "/services/program-leadership",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/human-centered-design",
        destination: "/services/user-research",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
