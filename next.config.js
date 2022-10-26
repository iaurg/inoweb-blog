module.exports = {
  images: {
    domains: ["inoweb.com.br", "localhost"]
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
      }
    ];
  }
};
