const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //开发服务运行时的文件根目录
    compress: true, //开发服务器是否启动gzip等压缩
    port: 9001, //端口
    historyApiFallback: true, //不会出现404页面，避免找不到
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/index.html`, //源html
      inject: 'body', //注入到哪里
      filename: 'index.html', //输出后的名称
      hash: true, //为静态资源生成hash值
    }),
  ],
};
