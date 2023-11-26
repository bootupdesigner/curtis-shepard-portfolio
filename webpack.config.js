const createExpoWebpackConfigAsync = require('@expo/webpack-config');
const path = require("path");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");


module.exports = async function (env, argv) {
    const isEnvProduction = env.mode === "production";

    const config = await createExpoWebpackConfigAsync(env, argv);
    // Customize the config before returning it.

    if (isEnvProduction) {
        config.plugins.push(
            
          new WorkboxWebpackPlugin.InjectManifest({
            swSrc: path.resolve(__dirname, "src/service-worker.js"),
            dontCacheBustURLsMatching: /\.[0-9a-f]{8}\./,
            exclude: [
              /\.map$/,
              /asset-manifest\.json$/,
              /LICENSE/,
              /\.js\.gz$/,
              // Exclude all apple touch and chrome images because they're cached locally after the PWA is added.
              /(apple-touch-startup-image|chrome-icon|apple-touch-icon).*\.png$/,
            ],
            
            maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
          })
        );
      }

    return config;
};
