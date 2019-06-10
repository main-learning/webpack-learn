const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // css loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      // image loader
      {
        test: /\.(jpg|png|svg|gif|webp)$/,
        use: [
          'file-loader',
        ],
      },
      // font loader
      {
        test: /\.(ttf|woff|woff2|otf|eot)$/,
        use: [
          'file-loader',
        ],
      },
      // csv loader
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      // xml loader
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};