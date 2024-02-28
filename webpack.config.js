const path = require("path");

module.exports = {
  entry: "./src/index.html",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"), // Serve files from 'docs' directory
    index: "index.html", // Use 'index.html' as the default index file
    port: 8080, // Optional: Specify the port to listen on
  },
};
