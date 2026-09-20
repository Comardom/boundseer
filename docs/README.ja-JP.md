[English](../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)
## boundseer
Androidでは、「設定」を開くと、「開発」または「開発者向けオプション」の中に、「レイアウト境界を表示」というオプションがあります。このオプションをオンにすると、各要素のレイアウト境界を描画するオーバーレイが表示されます。このプロジェクトの意図は、Googleのこのアイデアを真似して、開発中のWebページで各要素の境界を表示することです。
## 強調
browser-only、distにESMとIIFEがあります<br />
on()とoff()のreturnは可視要素数です<br />
SSRのページじゃ、scriptがbrowser上で実行されるようにする必要があります
## このツールの使用方法
```bash
pnpm add -D boundseer
```
#### front-end frameworkを使用する場合
main.ts、main.js、main.tsxなどのentry scriptに読み込みます：
```js
import 'boundseer'
```
それから、browserで、F12を押して開発者ツールを開き、Consoleで以下のコマンドを入力して操作します：
```js
bdsr.on()
bdsr.off()
```
まだは、ページを再読み込みすることで、layout境界表示をoffにすることもできます。<br />
#### HTML、CSS、JavaScript
このscriptを呼び出します：
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    ...
  </head>
  <body>
    ...
    <script src="./node_modules/boundseer/dist/index.iife.js"></script>
  </body>
</html>
```
まだ、Consoleでbdsrが未定義と表示された場合、この書き方を使うこともできます：
```js
window.bdsr.on()
window.bdsr.off()
```