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

## Markdownファイルを追加するだけでページを作成

今回使ったprocessmdはMarkdownをjsonに変換してくれて、titleやtagsなど自由にオプションとして追加できるため少し凝ったレイアウトにしたい場合などに便利

更にMarkdownファイルの内容をまとめたSummaryファイルも出力できるため一覧画面の作成がとても楽だったので採用しました

