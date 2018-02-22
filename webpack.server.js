// Bundling configuration for server side JavaScript/JSX
const path = require("path");

module.exports = {
  // inform webpack that we're building a bundle for node js
  target: "node",

  // root file of server application
  entry: "./src/index.js",

  // where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // run babel to transpire the > ES5 code
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
