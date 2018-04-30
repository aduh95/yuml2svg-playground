const webpack = require("webpack");

module.exports = {
  node: false,
  externals: "viz.js/full.js.opaque",
  plugins: [
    new webpack.DefinePlugin({
      IS_BROWSER: true,
    }),
  ],
};
