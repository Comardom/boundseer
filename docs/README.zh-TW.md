[English](../README.md) | [简体中文](./README.zh-CN.md) | [日本語](./README.ja-JP.md)
## boundseer
開啟Android作業系統的軟體“設定”，可以在開發者選項中找到“顯示版面配置界限”，此項目旨在模仿這個可以勾勒區塊界限的idea，在dev狀態下的頁面上標示元素的框線。<br />
## highlight
瀏覽器-only，dist裡有ESM和IIFE<br />
on()和off()返回頁面可見元素數量<br />
SSR頁面要確保腳本在瀏覽器上執行，而非遠端伺服器
## 這個工具要怎麼用
```bash
pnpm add -D boundseer
```
#### 使用前端框架，而不是只靠 HTML、CSS、JavaScript 這三樣
在入口腳本，例如main.ts、main.js、main.tsx等檔案裡引入：
```js
import 'boundseer'
```
然後在瀏覽器按F12進開發者模式，在Console裡輸入下面的指令來控制：
```js
bdsr.on()
bdsr.off()
```
或者你也可以透過重新整理頁面來關閉邊界顯示<br />
#### HTML、CSS、JavaScript
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
  </body>
</html>
```
另外，如果Console跳出bdsr未定義，可以用這種寫法：
```js
window.bdsr.on()
window.bdsr.off()
```