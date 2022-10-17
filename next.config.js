module.exports = {
  images: {
    domains: ["cdn.sanity.io", "inoweb.com.br"],
    loader: "custom"
  },
  swcMinify: true,
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};
