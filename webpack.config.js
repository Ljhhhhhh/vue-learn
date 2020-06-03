const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    //js打包压缩后的出口文件，多入口时对应的配置应做相对变化 注释②
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'), //编译打包文件的位置
    publicPath: '/',
    port: 9006, //服务器端口号
    host: '0.0.0.0',
    proxy: {}, //代理列表
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }), //根据项目提供HTML模板，生成新页面，并将对应的输出打包压缩输出的js，链接到页面中；详细配置见注释④
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map'
}
