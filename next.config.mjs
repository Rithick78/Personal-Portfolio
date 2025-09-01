/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(), // Add this line

  webpack(config) {
    // Support for .glb/.gltf
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/assets/",
          outputPath: "static/assets/",
          name: "[name].[hash].[ext]",
        },
      },
    });

    // Support for .png/.jpg/.jpeg/.gif/.svg
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;