const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 客户端 react 应用的入口文件
const adminBrowserFilePath = path.resolve(__dirname, './app/web/page/browser/admin');
// 服务端 react 应用的入口文件
const adminServerFilePath = path.resolve(__dirname, './app/web/page/server/admin');
const browserBuildPath = path.resolve(__dirname, './build');
const serverBuildPath = path.resolve(__dirname, './app/view');

module.exports = [
  {
    name: 'browser',
    entry: {
      admin: adminBrowserFilePath
    },
    output: {
      path: browserBuildPath,
      filename: 'static/js/[name].js',
      chunkFilename: 'static/js/[name].chunk.js',
      publicPath: '/'
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['build'])
    ]
  },
  {
    name: 'server',
    entry: {
      admin: adminServerFilePath
    },
    output: {
      path: serverBuildPath,
      filename: '[name].js',
      publicPath: '/',
      libraryTarget: 'commonjs'
    },
    target: 'node',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules\/)/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['app/view'])
    ]
  }
];
