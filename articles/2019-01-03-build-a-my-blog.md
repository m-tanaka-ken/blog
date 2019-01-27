---
title: Nuxt.jsでブログ構築しました（WIP）
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

Netlifyは使ったことなかったので今回使用感を知るために採用

## Markdownファイルを追加するだけでページを作成

※ こちらの記事を参考にさせていただきました（というかほぼ丸パクリ）
[Nuxt.js で Markdown ベースのブログを構築する（Markdown 編）](https://jmblog.jp/posts/2018-01-17/build-a-blog-with-nuxtjs-and-markdown-1/)




