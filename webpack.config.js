const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js',
  //파일을 읽어들이기 시작하는 진입점 설정
  output: {
    // path: path.resolve(__dirname,'dist'),
    // filename: 'main.js',
    clean: true
  },
  // 결과문(번들)을 반환하는 설정

module: {
  rules: [
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
   test: /\.js$/,
   use: [
     'babel-loader'
   ]
  }
  ]
},


plugins: [
  new HtmlPlugin({
    template: './index.html'
  }),
  new CopyPlugin({
    patterns: [
      { from: 'static' }
    ]
  })
],
// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
 devServer: {
   host: 'localhost'
 }
}