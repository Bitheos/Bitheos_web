import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig;
