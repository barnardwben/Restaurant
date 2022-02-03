const path = require("path");
const gi = require("gitignore");

module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
