---
title: Nuxt.jsでブログ構築しました
created_at: 2019-01-03
tags:
url: 2019-01-03/build-a-my-blog
---

今回、作りたかったブログ

- Markdownベース
- Markdownファイルを追加するだけでブログに反映できる
- DBを使わない
- 記事を書いてGitHubの草が生える
- 普段vue.jsを書いているので触ってないNuxt.jsを使いたい

Markdownベースにするためにvue系でよく使われているらしいmarkdown-itを使ってみるがMarkdownパーサー以上のことはできないためファイル追加だけでブログに反映させることが難しかったので断念

そこで参考にさせてもらった記事で見つけたprocessmdを使ってみました

processmdはmarkdownをjs内で扱いやすいjsonに変換してくれます、そしてサマリーデータも作成することができるので記事一覧画面なども簡単に実装できました

