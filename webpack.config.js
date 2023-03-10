const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const optimization = () => {
   const config = {
      splitChunks: {
         chunks: 'all',
      },
   };

   if (!isDev) {
      config.minimizer = [new TerserPlugin()];
      // config.minimizer = [new TerserPlugin(), new OptimizeCssAssetsPlugin()];
   }

   return config;
};

const filename = (ext) => {
   return isDev ? `[name].${ext}` : `[name].[hash].${ext}`;
};

const jsLoaders = () => {
   const loaders = [
      {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env'],
         },
      },
   ];

   if (isDev) {
      loaders.push('eslint-loader');
   }

   return loaders;
};

module.exports = {
   context: path.resolve(__dirname, 'src'),
   entry: {
      main: ['@babel/polyfill', './index.js'],
      // analytics: './analytics.js',
   },
   output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist'),
   },
   resolve: {
      extensions: ['.js', '.json', '.css'],
   },
   optimization: optimization(),
   devServer: {
      port: 4200,
      hot: true,
   },
   devtool: isDev ? 'source-map' : false,
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html',
         inject: true,
         minify: {
            removeComments: true,
            collapseWhitespace: !isDev,
         },
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, 'src/favicon.ico'),
               to: path.resolve(__dirname, 'dist'),
            },
            {
               from: path.resolve(__dirname, 'src/assets/img'),
               to: path.resolve(__dirname, 'dist/img'),
            },
            {
               from: path.resolve(__dirname, 'src/assets/font'),
               to: path.resolve(__dirname, 'dist/fonts'),
            },
         ],
      }),
      new MiniCssExtractPlugin({
         filename: 'styles/' + filename('css'),
      }),
   ],
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: jsLoaders(),
         },
         {
            test: /\.m?ts$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-typescript'],
               },
            },
         },
         {
            test: /\.css$/,
            use: [
               MiniCssExtractPlugin.loader,
               // 'style-loader', use witout mMiniCssExtractPlugin.loader
               'css-loader',
            ],
         },
         {
            test: /\.s[ac]ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
         },
         {
            test: /\.(png|jpg|jpeg|svg|gif)$/,
            loader: 'file-loader',
            options: {
               name: '../img/[name].[ext]',
               // useRelativePath: true,
               // outputPath: 'img',
            },
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            loader: 'file-loader',
            options: {
               name: '../fonts/[name].[ext]',
               // outputPath: 'fonts',
            },
         },
      ],
   },
};
