---
title: nodebrewをやめてnを導入する
created_at: 2019-02-23
tags: 
- n
- node.js
url: 2019-02-23/introduction-n
---

nodebrewでnodeのバージョンを上げる際にその都度globalのpackageのエイリアスを作成するのが面倒なのでnがいいという噂を聞いたので乗り換えてみます

## nodebrewをアンイントール

nodebrewは`~/.nodebrew`にインストールされているのでこれを削除

## nのインストール

nはnode.jsのpackageなのでまずはnode.jsをインストールします

homebrewでインストールする、バーションは最新で問題ないです

```text
brew install node
```

npmでnをインストール

```text
npm install -g n
```

node.jsの最新版を入れてみる

```text
sudo n stable
```

nは`/usr/local/n`にてバージョン管理するのでsudoで実行する必要がある
