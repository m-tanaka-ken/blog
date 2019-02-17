---
title: Apollo Server構築メモ
created_at: 2019-02-16
tags:
- Apollo Server
- GraphQL
url: 2019-02-16/apollo-server
---

Apollo ServerとはGraphQLクライアント用のGraph API Serverを素早く構築するためのライブラリ

Apollo Serve構築方法をすぐ忘れてしまうのでメモ

正確な解説は[マニュアルのBuilding a server](https://www.apollographql.com/docs/apollo-server/essentials/server.html)を読んでください

## 最低限の構築

まず、最低限必要なライブラリをインストール

```text
npm install -S apollo-server graphql
```

apollo serverはgraphqlを前提としているのでgraphqlもインストールする必要があります

そしてGraph API Serverを構築するのに最低限必要な要素として以下があります

- typeDefs
- resolvers

### typeDefs

typeDefsはtype definitionsの略でGraphQLの型を定義（schema）します

### resolvers

resolversはschemaを実装する関数を取り入れる機構です

typeDefsで設計し、resolversで設計通りの実装をするという感じでかな？

### 最小限のサンプル

ほぼ公式のサンプルと同じだが実際の最小限のコードはこちら

- index.js

```js
const { ApolloServer, gql } = require('apollo-server');

// resolversに入れるリソース
const books = [
  {
    title: '本1',
    author: '著者1'
  },
  {
    title: '本2',
    author: '著者2'
  }
];

// 型定義
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  
  type Query {
    books: [Book]
  }
`;

// resolvers
const resolvers = {
  Query: {
    books: () => books
  }
};

// ApolloServerをlistenすることでサーバーが立ち上がる
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
```

実際に実行してみる

```text
node index.js
```

以下が表示したら`http://localhost:4000/`からAPIドキュメントにもなるplaygroundにアクセスできる

```text
Server ready at http://localhost:4000/
```

以上で最小限の構築となる、更に実践的なことは別の記事でやることにします
