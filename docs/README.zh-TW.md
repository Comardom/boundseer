[English](../README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md)
## boundseer
開啟Android作業系統的軟體“設定”，可以在開發者選項中找到“顯示版面配置界限”，<br />
此項目旨在模仿這個可以勾勒區塊界限的idea，在dev狀態下的頁面上標示元素的框線。<br />
[去GitHub看倉庫](https://github.com/Comardom/boundseer)
## highlight
瀏覽器-only，dist裡有ESM和IIFE<br />
on()和off()返回頁面可見元素數量，失敗返回-1<br />
SSR頁面要確保腳本在瀏覽器上執行，而非遠端伺服器，像這樣：
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
## 這個工具要怎麼用
```bash
pnpm add -D boundseer
```
#### 使用建置工具
在入口腳本，例如main.ts、main.js、main.tsx等檔案裡引入：
```js
import { setupBoundseer } from 'boundseer'
setupBoundseer()
```
然後在瀏覽器按F12進開發者模式，在Console裡輸入下面的指令來控制（為了防止鍵入半角標點，中文可以直接鍵入到Console來操控開關狀態）：
```js
bdsr.on()
bdsr.off()
顯示界限
隱藏界限
顯示框線
隱藏框線
邊來
邊去
```
或者你也可以在沒有啟用持久化的情況下，透過重新整理頁面來關閉邊界顯示。<br />
#### 不使用建置工具
call這個腳本：
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
另外，如果Console跳出bdsr未定義，可以用這種寫法：
```js
window.bdsr.on()
window.bdsr.off()
```
## 缺省行為
boundseer加上setupBoundseer()在載入啟用後會讀入localStorage，<br />
也具備操作其的能力， 因此載入使用本工具，則認定為對localStorage的讀寫操作認可。<br />
若想啟用標籤頁sync和開關狀態保留，鍵入以下腳本均可：<br />
```js
bdsr.persist()
bdsr.persist(true)
没有没有通过
持久化
永遠
永久
同步
```
若要抹掉方才啟用的sync行為，鍵入這些都可以：
```js
bdsr.persist(false)
關閉持久化
停止持久化
孤立
```
如果要讓state從頭再來（以下均可）：
```js
bdsr.reset()
重置
蟲豸
初始化
大清洗
友愛部101號房
```