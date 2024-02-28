const path = require("path");

module.exports = {
  mode: "development",
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
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // Output CSS file to the desired location
              sassOptions: {
                outputStyle: "expanded",
                includePaths: ["./src/scss"],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      publicPath: "/",
      directory: path.join(__dirname, "docs"), // Serve files from the 'dist' directory
    }, // index: "index.html", // Use 'index.html' as the default index file
    port: 3000, // Optional: Specify the port to listen on
  },
};
