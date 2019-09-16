const path = require ('path');
const HtmlWebpackPlugin = require ('html-webpack-plugin'); //html
const tsImportPluginFactory = require ('ts-import-plugin');
const UglifyJsPlugin = require ('uglifyjs-webpack-plugin'); //多线程压缩
const MiniCssExtractPlugin = require ('mini-css-extract-plugin'); //css压缩
const HappyPack = require ('happypack'); //多线程运行
const happyThreadPool = HappyPack.ThreadPool ({size: 4});
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清空

const webpack = require ('webpack');

const BundleAnalyzerPlugin = require ('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin; //视图分析webpack情况

const publicPath = {
  dev: './',
  development: '/',
  production: './',
};

const devtool = {
  dev: 'cheap-eval-source-map',
  development: 'cheap-eval-source-map',
  production: 'source-map',
};

const minimize = {
  dev: false,
  development: false,
  production: true,
};

/**
 * 公共插件
 */
const pluginsPublic = [
  new MiniCssExtractPlugin ({
    chunkFilename: '[name][hash].css',
    filename: 'index.css',
  }),
  new HappyPack ({
    //多线程运行 默认是电脑核数-1
    id: 'babel', //对于loaders id
    loaders: ['babel-loader'], //是用babel-loader解析
    threadPool: happyThreadPool,
    verboseWhenProfiling: true, //显示信息
  }),
  new webpack.ContextReplacementPlugin (
    /moment[\\\/]locale$/,
    /^\.\/(en|ko|ja|zh-cn)$/
  ),
];

/**
 * 公共打包插件
 */
const pluginsBuild = [
  new HtmlWebpackPlugin ({
    template: `${__dirname}/index.html`, //源html
    inject: 'body', //注入到哪里
    filename: 'index.html', //输出后的名称
    hash: true, //为静态资源生成hash值
    showErrors: true,
    chunksSortMode: 'none',
    minify: {
      caseSensitive: false, //是否大小写敏感
      collapseBooleanAttributes: true, //是否简写boolean格式的属性如：disabled="disabled" 简写为disabled
      collapseWhitespace: true, //是否去除空格
    },
  }),
  new CleanWebpackPlugin (['dist'], {
    root: __dirname,
  }),
  new webpack.HashedModuleIdsPlugin (),
  new webpack.DllReferencePlugin ({
    context: __dirname,
    manifest: require ('../dll/manifest.json'),
  }),
  new BundleAnalyzerPlugin ({
    //另外一种方式
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8889,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    statsOptions: null,
    logLevel: 'info',
  }),
];

const plugins = {
  dev: [].concat (pluginsPublic, pluginsBuild),
  development: [].concat (
    new BundleAnalyzerPlugin ({
      //另外一种方式
      analyzerMode: 'server',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8822,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
    }),
    new HtmlWebpackPlugin ({
      template: `${__dirname}/index.html`, //源html
      inject: 'body', //注入到哪里
      filename: 'index.html', //输出后的名称
      hash: true, //为静态资源生成hash值
      showErrors: true,
      chunksSortMode: 'none',
    }),
    pluginsPublic
  ),

  production: [].concat (
    pluginsPublic,
    pluginsBuild,
    new UglifyJsPlugin ({
      sourceMap: true,
      parallel: true,
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
    }) //压缩，生成map
  ),
};

module.exports = (env, argv) => {
  const dev = env.dev;
  return {
    entry: './src/index.tsx',
    devServer: {
      contentBase: path.join (__dirname, 'dist'), //开发服务运行时的文件根目录
      compress: true, //开发服务器是否启动gzip等压缩
      port: 9001, //端口
      historyApiFallback: true, //不会出现404页面，避免找不到
      progress: true,
    },
    output: {
      filename: 'index.js',
      path: __dirname + '/dist',
      chunkFilename: '[name][hash].js', //按需加载名称
      publicPath: publicPath[dev], //公共路径
    },
    devtool: devtool[dev],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      mainFields: ['main', 'jsnext:main', 'browser'],
      alias: {
        pages: path.resolve (__dirname, 'src/pages'),
        config: path.resolve (__dirname, 'src/config'),
        lib: path.resolve (__dirname, 'src/lib'),
        store: path.resolve (__dirname, 'src/store'),
        router: path.resolve (__dirname, 'src/router'),
        util: path.resolve (__dirname, 'src/util'),
        components: path.resolve (__dirname, 'src/components'),
        ax: path.resolve (__dirname, 'src/axios'),
      },
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
              minimize: minimize[dev], //压缩
            },
          },
        },

        {
          test: /\.(ts||tsx)?$/,
          use: [
            {
              loader: 'happypack/loader?id=babel',
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                  before: [
                    tsImportPluginFactory ({
                      libraryName: 'antd',
                      libraryDirectory: 'es',
                      style: true,
                    }),
                  ],
                }),
                compilerOptions: {
                  module: 'es2015',
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          // exclude: /(node_modules|bower_components)/,
          // include: [path.resolve(__dirname, 'src')],
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {
              loader: 'css-loader',
              options: {
                minimize: minimize[dev], //压缩
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: loader => [require ('autoprefixer') ()],
              },
            },
          ],
        },

        {
          test: /\.less/,
          use: [
            {loader: MiniCssExtractPlugin.loader},
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: loader => [require ('autoprefixer') ()],
              },
            },
            {loader: 'less-loader', options: {javascriptEnabled: true}},
          ],
        },

        // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
        // { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      ],
    },
    plugins: plugins[dev],
  };
};
