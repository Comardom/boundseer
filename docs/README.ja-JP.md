[English](../README.md) | [简体中文](./README.zh-CN.md) | [繁體中文](./README.zh-TW.md)
## boundseer
Androidでは、「設定」を開くと、「開発」または「開発者向けオプション」の中に、<br />
「レイアウト境界を表示」というオプションがあります。このオプションをオンにすると、各要素のレイアウト境界を描画するoverlayが表示されます。<br />
このプロジェクトの意図は、Googleのこのアイデアを真似して、開発中のWebページで各要素の境界を表示することです。
[GitHub-repo](https://github.com/Comardom/boundseer)
## 強調
browser-only、distにESMとIIFEがあります<br />
on()とoff()のreturnは可視要素数です；失敗して、-1です<br />
SSRのページじゃ、scriptがbrowser上で実行されるようにする必要があります、このように：
```html
<!doctype html>
<html lang="zh-CN">
<head>
    ...
</head>
<body>
...
<script type="module">
    if (typeof window !== 'undefined') {
        const { setupBoundseer } = await import('boundseer')
        setupBoundseer()
    }
</script>
</body>
</html>
```
## このツールの使用方法
```bash
pnpm add -D boundseer
```
#### build toolを使用する場合
main.ts、main.js、main.tsxなどのentry scriptに読み込みます：
```js
import { setupBoundseer } from 'boundseer'
setupBoundseer()
```
それから、browserで、F12を押して開発者ツールを開き、Consoleで以下のコマンドを入力して操作します<br />
（半角記号の入力は面倒だから、漢字と仮名で入力しよう、便利だよ）：
```js
bdsr.on()
bdsr.off()
枠開始
枠停止
わくかいし
わくていし
枠オン
枠オフ
わくオン
わくオフ
枠表示
枠非表示
わくひょうじ
わくひひょうじ
```
まだは、永続化なしで、ページを再読み込みすることで、layout境界表示をoffにすることもできます。<br />
#### build toolを使用しない場合
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
<script>
    window.bdsr.setupBoundseer()
</script>
</body>
</html>
```
まだ、Consoleでbdsrが未定義と表示された場合、この書き方を使うこともできます：
```js
window.bdsr.on()
window.bdsr.off()
```
## defaultの動作
boundseerのsetupBoundseer()はdefaultでlocalStorageの中身を読み取り、それを操作する可能性のある機能も持っています、<br />
じゃ、このツールを読み込んで使用することは、localStorageへの読み書き操作に同意したことを意味します。<br />
同じsiteのtabsのon/off状態を同期させ、recordしても状態を保持したい場合、<br />
これを入力してください（どちらでもOK）：
```js
bdsr.persist()
bdsr.persist(true)
永続化
えいぞくか
永遠
えいえん
永久
えいきゅう
同期
どうき
```
切る（どちらでもOK）：
```js
bdsr.persist(false)
永続化なし
えいぞくかなし
永遠じゃない
えいえんじゃない
永久じゃない
えいきゅうじゃない
同期なし
どうきなし
孤立
こりつ
```
困惑したら、このscriptを呼び出しください、clearが実行されます（どちらでもOK）：
```js
bdsr.reset()
リセット
初期化
しょきか
再設定
さいせってい
```