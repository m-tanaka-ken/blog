---
title: Reducer Creator
created_at: 2018-05-07
tags:
- JavaScript
- Redux
url: 2018-05-07/reducer-creator
---

# Reducer Creator
なるものを実装してみた

## 動機
actionとreducerにそれぞれ処理を書くのが面倒
処理はactionに集中したい

## 使い方
createReducer()の第一引数にactionTypeの一意になるprefixを、第二引数に初期値を渡すだけ

## 中の仕組み
以下の条件を通った場合stateをmergeする、それだけ
- typePrefixが一致するもの
- payloadがObject

## 懸念点
どんな処理も無条件でmergeするので対応できないケースがありそう
メモリの負荷が多そう



対応できなそうになったら適宜修正する
