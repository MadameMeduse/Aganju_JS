const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.html", // Assuming your entry point is index.js
  output: {
    path: path.resolve(__dirname, "docs"), // Output to the 'docs' directory
    filename: "bundle.js", // Output file name
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to your index.html template
      filename: "index.html", // Output HTML file name
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "assets" }, // Copy any assets from src/assets to docs/assets
      ],
    }),
  ],
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
                includePaths: ["./src/assets/scss"],
              },
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "docs"),
    },
    port: 3000, // Optional: Specify the port to listen on
    historyApiFallback: true, // Serve index.html for any 404 responses
  },
};
