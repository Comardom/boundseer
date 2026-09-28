[English](../README.md) | [繁體中文](./README.zh-TW.md) | [日本語](./README.ja-JP.md)
## boundseer
打开安卓系统的设置，在开发者模式中有一个开关叫做“显示布局边界”。<br />
这个开关能够画出各容器的边界，boundseer这个项目旨在模仿此创意，在开发中的网页上展示元素边界。<br />
[去GitHub看仓库](https://github.com/Comardom/boundseer)
## 强调
此工具为浏览器调试工具，dist包含ESM和IIFE两种产物<br />
on()和off()的返回值是页面上可见元素数量，失败返回-1<br />
SSR框架的网页，请保证脚本跑在浏览器而不是服务器上，就像这样：
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
## 如何使用该工具
```bash
pnpm add -D boundseer
```
#### 使用构建工具
在入口脚本如main.ts、main.js、main.tsx等文件中引入：
```js
import { setupBoundseer } from 'boundseer'
setupBoundseer()
```
然后在浏览器按F12进入开发者模式，在控制台里输入下面的命令控制（为了避免输入半角标点，中文可以直接输入到控制台来控制开关）：
```js
bdsr.on()
bdsr.off()
边来
边去
示廓
隐藏轮廓
显示边界
隐藏边界
```
或者你也可以在没有开启持久化的情况下，通过刷新页面来关闭边界显示。<br />
#### 不使用构建工具
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
<script>
    window.bdsr.setupBoundseer()
</script>
</body>
</html>
```
另外，如果控制台提示bdsr未定义，可以使用这种写法：
```js
window.bdsr.on()
window.bdsr.off()
```
## 默认行为
boundseer加上setupBoundseer()会默认读取localStorage中的内容，<br />
并且存在可能操作其的能力，因此加载并使用本工具代表同意对localStorage的读写操作。<br />
如果你想要让同一个网站的多个标签都同步开关信息并且刷新也不改变开关状态，<br />
输入这个（以下皆可）：
```js
bdsr.persist()
bdsr.persist(true)
没有没有通过
持久化
永远
永久
同步
```
如果你想取消刚才开启的同步行为，输入这个（以下皆可）：
```js
bdsr.persist(false)
关闭持久化
停止持久化
孤立
```
如果你不清楚现在是什么情况，想重置状态，请输入这个（以下皆可）：
```js
bdsr.reset()
重置
虫豸
初始化
大清洗
友爱部101室
```