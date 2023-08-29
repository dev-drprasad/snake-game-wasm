const { config } = require("@swc/core/spack");

module.exports = config({
  entry: {
    main: __dirname + "/index.js",
  },
  output: {
    path: __dirname + "/build",
  },
  module: {},
  target: "browser",
});
