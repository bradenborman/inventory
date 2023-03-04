const webpack = require("webpack");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[fullhash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.(ts|tsx)?$/,
        loader: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "./index.html",
    }),
    new CopyPlugin([
      { from: "src/img", to: "img" },
      // { from: "src/error.html", to: "" },
      // { from: "src/lib/fonts", to: "fonts" },
      // { from: "src/lib/webfonts", to: "webfonts" },
      // {
      //   from: "src/lib/font-awesome-v5.10.2.min.css",
      //   to: "lib/font-awesome-v5.10.2.min.css"
      // }
    ]),
  ],
};

if (isProd) {
  config.module.rules.push({
    test: /\.(sa|sc|c)ss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  });

  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: "index.[fullhash].css",
      chunkFilename: "[id].[fullhash].css",
    })
  );
} else {
  config.devServer = {
    port: 8081,
    open: true,
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        secure: false,
      },
    },
  };

}

module.exports = config;