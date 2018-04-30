const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, "docs"),
  },
  node: false,
  plugins: [
    new webpack.DefinePlugin({
      IS_BROWSER: true,
    }),
  ],
};
