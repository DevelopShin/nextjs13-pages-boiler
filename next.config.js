/** @type {import('next').NextConfig} */
const withTwin = require("./withTwin.js");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withTwin(nextConfig);
