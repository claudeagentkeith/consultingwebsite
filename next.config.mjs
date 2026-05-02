/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // npdengineering.com -> hitmakerengineering.com (308). Vercel can also do
  // this at the domain layer; this keeps the redirect in code as a fallback
  // and so it survives any project re-link.
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
    ];
  },
};

export default nextConfig;
