/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const withImages = require('next-images');
const { i18n } = require('./next-i18next.config');

const { parsed: appEnv } = require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = withImages({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(appEnv));
    return config;
  },
  images: {
    loader: 'imgix',
    path: '/',
    domains: ['assets.gate4dev.net'],
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },
  reactStrictMode: false,
  i18n,
});
