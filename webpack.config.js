const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './frontend/src/index.js', 
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/, 
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react", 
            ],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json"
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.png'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    // client: { webSocketTransport: "sockjs" },
    // webSocketServer: "sockjs",
    proxy: {
      '/api': 'http://localhost:3000',
      secure: false,
    },
  },
};