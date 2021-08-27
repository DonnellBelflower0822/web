const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: {
    main: './src/index.tsx'
  },
  // 输出
  output: {
    // 输出文件名
    // name
    filename: '[name].js',
    // 输出目录
    path: path.resolve(__dirname, '..', 'dist'),
    // 输出前清除目录
    clean: true
  },
  module: {
    // loader: 将非js和json模块转换成js能识别的模块
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          // cacheDirectory 指定的目录将用来缓存 loader 的执行结果
          loader: 'babel-loader?cacheDirectory',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  // 插件: 对输出文件进行增强
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      template: './public/index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: './dist'
  }
}
