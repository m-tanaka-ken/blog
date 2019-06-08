---
title:
created_at:
tags:
url:
---
# nvmを導入した(fish)

nvmはnodeのバーション管理ツール

今まではnodebrewを使っていたが今の会社で使っている人が多かったのとなんとなく試してみたかったので変更することにした

当たり前だけど基本的に公式に全て書いてある
https://github.com/nvm-sh/nvm

まずはnvmをインストール

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

ちなみにHomebrewはサポートしていないっぽい
> Homebrew installation is not supported. If you have issues with homebrew-installed nvm, please brew uninstall it, and install it using the instructions below, before filing an issue.

nvmはbash依存なのでfishを使っている場合使えない、なのでfishのプラグインを追加
fisherの場合
```
fisher add FabioAntunes/fish-nvm
fisher add edc/bass
```

oh-my-fishの場合
```
omf install https://github.com/FabioAntunes/fish-nvm
omf install https://github.com/edc/bass
```

あとはnodeをインストールするだけ
今回はltsをインストール

```
nvm install --lts 
```

nodeのバージョンが確認できれば完了
```
node -v
```
