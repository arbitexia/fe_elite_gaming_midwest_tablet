/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const { parsed: appEnv } = require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(appEnv));
    return config;
  },
  eslint: {
    dirs: ['pages', 'components', 'lib'],
  },
  reactStrictMode: false,
};
