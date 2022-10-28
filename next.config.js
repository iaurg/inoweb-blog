module.exports = {
  images: {
    domains: [
      "inoweb.com.br",
      "localhost",
      "vercel.app",
      "https://inoweb-blog.vercel.app"
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
  }
};
