---
title: Nuxt.jsでブログ構築しました
created_at: 2019-01-03
tags:
- nuxt.js
- Netlify
- processmd
url: 2019-01-03/build-a-my-blog
---

年末年始にひっそりと技術記事を書くため場所を作ろうと思いブログを立ち上げました！

## 今回、作りたかったブログ

- Markdownベース
- Markdownファイルを追加するだけでブログに反映できる
- DBを使わない
- 記事を書いてGitHubの草が生える
- 普段vue.jsを書いているので触ってないNuxt.jsを使いたい

## 使った技術

- nuxt.js（vue製フレームワーク）
- Netlify（静的ホスティングサービス）
- processmd（markdownパーサ）

フレームワークは正直何でもよかったんですが普段使う機会が無いNuxtを採用

Markdownパーサーはmarkedやmarkdown-itなど試してみたんですが書いた記事から自動でurlを生成したり、記事の一覧を作ろうとするととても難しかったので断念

書いた記事を扱いやすいjsonにして、更に記事をまとめたsummary.jsonを作れるprocessmdを採用

Netlifyは静的コンテンツのホスティングサービスでgithubと連携してpushやmargeがあればNetlifyCIでビルド＆デプロイをしてくれる

使ったことなかったので今回使用感を知るために採用

## Markdownファイルを追加するだけでページを作成

※ こちらの記事を参考にさせていただきました（というかほぼ丸パクリ）。

[Nuxt.js で Markdown ベースのブログを構築する（Markdown 編）](https://jmblog.jp/posts/2018-01-17/build-a-blog-with-nuxtjs-and-markdown-1/)

### processmdで記事のjsonファイルを作成する

記事はファイル名をyyyy-mm-dd-title.mdに固定し、以下のフォーマットにする

```text

---
title: 記事のタイトル
created_at: 作成日
tags:  //記事の関連タグをリスト形式
- html
- css
- js
url: yyyy-mm-dd/title
---

ここに本文を書く

```

上記フォーマットで書いた記事をprocessmdでjsonへコンパイルすると以下のようなjsonが生成される

yyyy-mm-dd-title.json
```js
{
  "title": "記事のタイトル",
  "created_at": "yyyy-mm-ddT00:00:00.000Z",
  "tags": [
    "html",
    "css",
    "js"
  ],
  "url": "yyyy-mm-dd/title",
  "bodyContent": "ここに本文を書く",
  "bodyHtml": "<p>ここに本文を書く</p>",
  "dir": "articles/dist",
  "base": "yyyy-mm-dd-title.json",
  "ext": ".json",
  "sourceBase": "yyyy-mm-dd-title.md",
  "sourceExt": ".md"
}
```

更にprocessmdでは以下のような記事の一覧ファイルを生成できる

summary.json
```js
{
  "fileMap": {
    "articles/dist/yyyy-mm-dd-title.json": {
      "title": "記事のタイトル",
      "created_at": "yyyy-mm-ddT00:00:00.000Z"
      "tags": [
        "html",
        "css",
        "js"
      ],
      "url": "yyyy-mm-dd/title",
      "dir": "articles/dist",
      "base": "yyyy-mm-dd-title.json",
      "ext": ".json",
      "sourceBase": "yyyy-mm-dd-title.md",
      "sourceExt": ".md"
    },
    ...
  },
  "sourceFileArray": [
    "articles/yyyy-mm-dd-title.md",
    ...
  ]
}
```

これらのjsonを使って一覧ページと記事ページを作っていく

### Nuxtでのディレクトリ構成

今回のブログでは以下のようなurlを想定

```text

記事の一覧ページ
/

記事ページ
/yyyy-mm-dd/title

```

記事ページのパスは動的に変わるため以下のような構成にする

```text

pages
├index.vue // 一覧ページ
└_date
 └_slug
  └index.vue // 記事ページ
    
```

### 一覧ページ

一覧用に作成したsummary.jsonをソートして出力するだけ

```js
import orderBy from 'lodash/orderBy';

import { fileMap } from '@/articles/dist/summary.json';

export default { 
  name: 'Home',
  
  components: { TagList, Card },
  
  computed: {
    articles() {
      return orderBy(Object.values(fileMap), ['created_at'], ['desc']);
    }
  }
}
```

```html
<card
  v-for="article in articles"
  v-if="article.url"
  :key="article.created_at"
>
  <div>{{ article.created_at | dateFormatYMDJp }}</div>
  <h1 class="title">
    <nuxt-link :to="`/${article.url}`">{{ article.title }}</nuxt-link>
  </h1>
  <tag-list :tags="article.tags"/>
</card>
```

### 記事ページ

ファイルの存在確認し、記事を取得

```js

validate({ params }) {
  return sourceFileArray.includes(
    `articles/${params.date}-${params.slug}.md`
  );
},

asyncData({ params }) {
  return Object.assign(
    {},
    require(`@/articles/dist/${params.date}-${params.slug}.json`),
    { params }
  );
}
```

```html
<card>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <div class="created-at">投稿日：<time>{{ created_at | dateFormatYMDJp }}</time></div>
    <tag-list :tags="tags"/>
  </header>
  <div v-html="bodyHtml"/>
</card>
```

あとはNetlifyがgithubにpushするたびにデプロイしてくれる、とっても簡単

## まとめ

こうしてMarkdownで記事を書くだけで記事を投稿でき、githubの草も生やせる素敵なブログができました
