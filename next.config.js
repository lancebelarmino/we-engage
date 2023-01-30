/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
      },
    });

    return config;
  },
  // assetPrefix: './',
};

module.exports = nextConfig;
