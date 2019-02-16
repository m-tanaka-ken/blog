---
title: Apollo Server構築メモ
created_at:
tags:
- Apollo Server
- GraphQL
url:
---

Apollo ServerとはGraphQLクライアント用のGraph API Serverを素早く構築するためのライブラリ

Apollo Serve構築方法をすぐ忘れてしまうのでメモ

## 最低限の構築

まず、最低限必要なライブラリをインストール

```
npm install -S apollo-server graphql
```

apollo serverはgraphqlを前提としているのでgraphqlもインストールする必要があります

そしてGraph API Serverを構築するのに最低限必要な要素として以下があります

- typeDefs
- resolvers

### typeDefs

typeDefsはtype definitionsの略でGraphQLの型を定義します

### resolvers

resolversはクエリを受け取って実際に返却するデータを定義します

### 最小限のサンプル

ほぼ公式のサンプルと同じだが実際の最小限のコードはこちら

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

```
node index.js
```

以下が表示したら`http://localhost:4000/`からAPIドキュメントにアクセスできる

```text
Server ready at http://localhost:4000/
```
