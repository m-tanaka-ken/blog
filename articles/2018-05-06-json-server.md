---
title: json-serverでAPIモックサーバーを簡単に構築する
created_at: 2018-05-06
tags:
 - utils
 - mock
url: 2018-05-06/json-server
---

## 使い方

### インストール
githubのREADMEではグローバルにインストールしているがlocalでインストールした方が何かと使い勝手がいいのでlocalでインストール

```
yarn add --dev json-server
```

### データの用意
用意するものはapiのデータを返すjsonを用意するだけ。

[JSON GENERATOR](https://www.json-generator.com/)（フェイクjson生成ツール）をあわせて利用するととても簡単

仮で `DB.json`を作成、project直下に配置してもいいが今回はapi-server/に配置する

### 実行
あとは以下を実行するだけ（他のserverと競合しないようにportも指定）

```js
node_module/.bin/json-server --watch api-server --port 3001
```

あとは `localhost:3001`や `localhost:3001/hoge`などでデータを取得することができる。

### npm　scriptに登録
npmのscriptに以下で登録すると楽

```
"api-server": "$(npm bin)/json-server --watch api-server --port 3001"
```

```
yarn run api-server
```

json-serverのパスの使い方は[ここ](https://github.com/typicode/json-server#routes)
