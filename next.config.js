module.exports = {
  webpack(config, isServer) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
      },
    });

    if (isServer) {
      require('./scripts/sitemap');
    }
    return config;
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}