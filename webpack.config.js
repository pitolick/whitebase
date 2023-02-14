const path = require('path')

module.exports = {
  // /node_modules/ 配下は watch 対象外に
  watchOptions: {
    ignored: /node_modules/,
  },
  // キャッシュを作ってビルド速度を向上
  // https://webpack.js.org/configuration/cache/
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename],
    },
  },
  // ベースディレクトリの設定
  // https://webpack.js.org/configuration/entry-context/
  context: path.join(__dirname, 'src/ts'),
  // エントリポイントの設定
  entry: {
    script: `./script.ts`,
  },
  // TypeScriptの設定
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
    ],
  },
  // import 文で .ts ファイルを解決
  resolve: {
    // 拡張子を配列で指定
    extensions: ['.ts', '.js'],
  },
  // 出力ファイルの設定
  output: {
    // 出力ファイルのディレクト名
    path: `${__dirname}/js`,
    // 出力ファイル名
    filename: '[name].min.js',
    // 出力ファルダ内のファイルを一旦、全て削除
    // clean: true,
  },
  // https://webpack.js.org/configuration/performance/
  performance: {
    // パフォーマンスのヒントを表示しないよう設定
    hints: false,
  },
}
