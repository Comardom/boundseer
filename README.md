[简体中文](docs/README.zh-CN.md) | [繁體中文](docs/README.zh-TW.md) | [日本語](docs/README.ja-JP.md)
## boundseer
In Android, we click *Settings*, then *Advanced Settings* → *Developer Options* → *Show layout bounds*, open this toggle can summon a overlay to draw layout box outlines for each element.<br />
So I'd like to mimic this Google's idea in this project called **boundseer**.<br />
## attention
it's browser only, and it has ESM and IIFE<br />
on() and off() return the number of visible elements detected on the page, and failure get -1<br />
in SSR, please make sure boundseer runs in browser, like this:
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
        await import('boundseer')
    }
</script>
</body>
</html>
```
## how to use
```bash
pnpm add -D boundseer
```
#### With a build tool
add this in main.ts or main.js or main.tsx and so on:
```js
import 'boundseer'
```
then press F12 in Browser, open console, enter these to control:
```js
bdsr.on()
bdsr.off()
```
or you can refresh to off.<br />
#### Without a build tool
use it in your HTML file:
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
if you get msg like "bdsr is not defined", please use this:
```js
window.bdsr.on()
window.bdsr.off()
```
