const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const tsImportPluginFactory = require('ts-import-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //多线程压缩
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //css压缩
const HappyPack = require('happypack'); //多线程运行
const CleanWebpackPlugin = require('clean-webpack-plugin') //清空
const happyThreadPool = HappyPack.ThreadPool({ size: 4 });
const { argv } = process;

let developmentMode = true;  //开发模式
argv.forEach(v => {
  if (v == 'production') {
    developmentMode = false;
  }
});
const plugins = [
  new CleanWebpackPlugin(['dist'], {
    root: __dirname,
  }),
  new HtmlWebpackPlugin({
    template: `${__dirname}/index.html`, //源html
    inject: 'body', //注入到哪里
    filename: 'index.html', //输出后的名称
    hash: true, //为静态资源生成hash值
  }),
  new MiniCssExtractPlugin({
    //css添加hash
    // filename: '[name]-[hash].css',
    // chunkFilename: '[id][hash].css',
    chunkFilename: '[chunkhash].css',
    filename:'index.css',
  }),
  new HappyPack({
    //多线程运行 默认是电脑核数-1
    id: 'babel', //对于loaders id
    loaders: ['babel-loader?cacheDirectory'], //是用babel-loader解析
    threadPool: happyThreadPool,
    verboseWhenProfiling: true, //显示信息
  }),
  new UglifyJsPlugin({
    sourceMap: true, //webpack会生成map，所以这里不需要
    parallel: 2,
    cache: true,
    uglifyOptions: {
      output: {
        comments: false,
        beautify: false,
      },
      compress: {
        drop_console: true,
        warnings: false,
        drop_debugger: true,
      },
    },
    exclude: /(node_modules|bower_components)/,
  }), //压缩，生成map
];



module.exports = {
  entry: './src/index.tsx',
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //开发服务运行时的文件根目录
    compress: true, //开发服务器是否启动gzip等压缩
    port: 9001, //端口
    historyApiFallback: true, //不会出现404页面，避免找不到
  },
  output: {
    filename:'index.js',
    path: __dirname + '/dist',
    // filename: '[id].[hash].js', //出口文件名称
    chunkFilename: '[id][hash].js',  //按需加载名称
    // chunkFilename: '[chunkhash].js', //按需加载名称
    publicPath: developmentMode ? '/' : './', //公共路径
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: developmentMode ? 'cheap-eval-source-map' : 'source-map', //cheap-eval-source-map  是一种比较快捷的map,没有映射列

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
    mainFields: ['main', 'jsnext:main', 'browser'], 
    alias: {
      "pages": path.resolve(__dirname, 'src/pages'),
      "config": path.resolve(__dirname, 'src/config'),
      "lib": path.resolve(__dirname, 'src/lib'),
      "store": path.resolve(__dirname, 'src/store'),
      "router": path.resolve(__dirname, 'src/router'),
      "util": path.resolve(__dirname, 'src/util'),
      "components": path.resolve(__dirname, 'src/components'),
      "ax": path.resolve(__dirname, 'src/axios'),
      
    }
  },
  module: {
    noParse: /node_modules\/(moment\.js)/, //不解析
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'], //为了做图片懒加载，那些属性需要被，制定什么属性被该loader解析
            minimize: !developmentMode,
          },
        },
      },

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.(ts||tsx)?$/, use: [
          {
            loader: 'happypack/loader?id=babel',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'es',
                  style: true,
                })]
              }),
              compilerOptions: {
                module: 'es2015'
              }
            },
          }
        ]
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules|bower_components)/,
        // include: [path.resolve(__dirname, 'src')],
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
            options: {
              minimize: !developmentMode, //压缩
            },
          },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')(),
              ]
            }
          },
        ],
      },

      {
        test: /\.less/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader', options: {
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')(),
              ]
            }
          },
          { loader: 'less-loader', options: { javascriptEnabled: true } },
        ],
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins,
};
