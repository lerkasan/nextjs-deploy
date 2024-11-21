/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dq2k7fjmw/**",
      },
      { 
        protocol: "https",
        hostname: "api.colabus.top",
        port: "",
        pathname: "/**",
      },
      { 
        protocol: "http",
        hostname: "213.199.63.47",
        port: "7778",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
