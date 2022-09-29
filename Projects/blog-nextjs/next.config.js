/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  const env =
    phase === PHASE_DEVELOPMENT_SERVER
      ? {
          api: "/api/dev",
        }
      : {
          api: "/api/prod",
        };

  return {
    reactStrictMode: true,
    swcMinify: true,
    env,
  };
};

module.exports = nextConfig;
