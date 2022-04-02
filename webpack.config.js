// const path = require("path");

// module.exports = {
//   entry: "/assets/js/odds-table.js",

//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "build"),
//   },
//   devtool: "source-map",

//   devServer: {
//     hot: false
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /(node_modules)/,
//         use: ['babel-loader']
//       },
//     ],
//   },

//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: ['style-loader', 'css-loader', 'sass-loader'],
//       },
//     ],
//   },
// };

const path = require("path");

module.exports = {
  entry: "/src/js/odds-table.js",
  output: {
    filename: "bundler.js",
    path: path.resolve(__dirname, "build"),
  },

  devtool: "source-map",

  devServer: {
    hot: false
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        },
      },
    ],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
