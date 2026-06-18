import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // textpour's peer `@chenglou/pretext` ships raw TypeScript source (exports point at .ts);
  // transpile both so Turbopack/Next can process them from node_modules.
  transpilePackages: ["textpour", "@chenglou/pretext"],
};

export default nextConfig;
