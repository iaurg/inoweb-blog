module.exports = {
  images: {
    domains: [
      "localhost",
      "localhost:3000"
    ]
    // loader: "custom"
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  },
  async rewrites() {
    return [
      {
        source: "/:category/:slug",
        destination: "/post/:slug"
      },
      {
        source: "/:slug",
        destination: "/categoria/:slug"
      }
    ];
  },
  basePath: "/blog"
};
