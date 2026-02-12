const isDev = process.env.NODE_ENV === "development";
const scriptSrc = isDev ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " : "script-src 'self' 'unsafe-inline'; ";
const connectSrc = isDev ? "connect-src 'self' ws: http: https:; " : "connect-src 'self'; ";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "base-uri 'self'; " +
      "form-action 'self'; " +
      "frame-ancestors 'none'; " +
      "object-src 'none'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' https://cdnjs.cloudflare.com; " +
      "style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; " +
      scriptSrc +
      connectSrc +
      "frame-src https://www.google.com; " +
      "upgrade-insecure-requests"
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "off" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" }
];

const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
