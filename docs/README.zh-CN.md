[English](../README.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja-JP.md)
## boundseer
打开安卓系统的设置，在开发者模式中有一个开关叫做“显示布局边界”。这个开关能够画出各容器的边界，boundseer这个项目旨在模仿此创意，在开发中的网页上展示元素边界。<br />
## 强调
此工具为浏览器调试工具，dist包含ESM和IIFE两种产物<br />
on()和off()的返回值是页面上可见元素数量<br />
SSR框架的网页，请保证脚本跑在浏览器而不是服务器上
## 如何使用该工具
```bash
pnpm add -D boundseer
```
#### 使用框架
在入口脚本如main.ts、main.js、main.tsx等文件中引入：
```js
import 'boundseer'
```
然后在浏览器按F12进入开发者模式，在控制台里输入下面的命令控制：
```js
bdsr.on()
bdsr.off()
```
或者你也可以通过刷新页面来关闭边界显示。<br />
#### 使用三大件
调用这个脚本：
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
另外，如果控制台提示bdsr未定义，可以使用这种写法：
```js
window.bdsr.on()
window.bdsr.off()
```