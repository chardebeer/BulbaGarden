/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@emotion/react', '@emotion/styled']);
const nextConfig = {
  reactStrictMode: false,
}

module.exports = withTM(nextConfig);
