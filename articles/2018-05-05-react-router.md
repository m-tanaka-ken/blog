---
title: react-router
created_at: 2018-05-05
tags:
- JavaScript
- React
- react-router
url: 2018-05-05/react-router
---
## react-router-dom
React Router v4以降ではwebではreact-router-dom、ネイティブではreact-router-nativeと分かれている

webで使う場合はreact-router-domをインストールすれば良くreact-router本体をインストールする必要はない

## BrowserRouter
Routingを作る場合はコアになるRouterComponentを使う必要がある。

RouterComponentには [`BrowserRouter`](https://reacttraining.com/react-router/web/api/BrowserRouter)と [`HashRouter`](https://reacttraining.com/react-router/web/api/HashRouter)があり今回はチュートリアルで使われている `BrowserRouter`を使う

## Route Matching
routingのマッチングを行うベーシックなcomponentに `Route`と `Switch`が用意されている

[`Route`](https://reacttraining.com/react-router/web/api/Route)にはパスにマッチしたcomponentを返す機能があり、 `Switch`は `Route`をグルーピングする際に用いる

[`Switch`](https://reacttraining.com/react-router/web/api/Switch)は必須では無いが `Switch`でグルーピングされた `Route`は最初にマッチしたRouteのみを返すため余計なルーティングの検索を避けることができ、404エラーなどの対応も楽にすることができる

## レンダリングプロパティ
マッチしたrouteがレンダリングするための基本的なプロパティが `component`と `render`の2つが用意されている。

`component`はステートレスなコンポーネントに。

`render`はステートを持つ（propsの受け渡しが必要な）コンポーネントに使用する
```javascript
<Route exact path='/' component={Home} />
<Route
  path='/about'
  render={(props) => <About {...props} extra={someVariable} />}
/>
```

## Navigation
react-route-domの [`Link`](https://reacttraining.com/react-router/web/api/Link)コンポーネントを使うことでreact-routerを使ったリンクを行うことができる

Navなどで現在のパスとリンクボタンが一致しているときに色を変えたい、などを実装したい場合は [`NavLink`](https://reacttraining.com/react-router/web/api/NavLink)を使うと実現できる

loginなどのstate次第で任意のrouteへ飛ばしたい場合は [`Redirect`](https://reacttraining.com/react-router/web/api/Redirect)を使うことで実装できる。

## webpack-dev-serverを使っている場合
webpack.config.jsのdevServerに `historyApiFallback: true`を追加する必要がある。

## 参考
[マニュアル](https://reacttraining.com/react-router/web/guides/philosophy)

マニュアルがめっちゃ分かりやすかったのでほとんど要約になってしまった
