---
title: CSS Modulesについて
created_at: 2018-05-10
tags: 
- css
- css-modules
url: 2018-05-10/css-modules
---
## ざっくり概要
cssをjsにimportしてclass名をbuild時に生成することで名前の汚染を防ぐ

## 最小限の設定

### webpackの設定

必要なloaderをinstall

- style-loader
- css-loader

loaderを設定する
```js
{
  rules: [
    test: /\.css$/, // testは読み込む拡張子を記述
    use: [
      'style-loader', // loader
      {
        loader: 'css-loader' // Objectの場合はloaderに指定
        options: {
          modules: true // css-moduleを有効にする
        }
      }
    ]
  ]
}
```

### CSS
cssはJSに合わせてキャメルケースで書くようにする

Button.css
```css
.myButton {
  background-color: blue
}
```

### JS（React）
cssファイルをimportして使う

Button.js
```js
import styles from './Button.css'

export default function Button() {
    return <button className="styles.myButton">hoge</button>
}
```

これでbuildすれば動く。

ただ、これだけだとclass名がhashされた文字列のみになるのでwebpackに以下を追加する

```js
{
  rules: [
    test: /\.css$/, // testは読み込む拡張子を記述
    use: [
      'style-loader', // loader
      {
        loader: 'css-loader' // Objectの場合はloaderに指定
        options: {
          modules: true, // css-moduleを有効にする
          localIdentName: '[local]___[hash:base64:5]' // ← localIdentNameをこのようにすると `クラス名___ハッシュ`のクラス名で生成される
        }
      }
    ]
  ]
}
```
