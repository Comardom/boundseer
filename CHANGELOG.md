# Changelog 
## [0.5.2] - 2026-09-30

### Fixed

* 修复了版本号

## [0.5.1] - 2026-09-30

### Fixed

* 修复了持久化不可用的问题

## [0.5.0] - 2026-09-28

### Added

* 增加 `bdsr.setupBoundseer()`，用于显式完成 boundseer 初始化。
* 增加 `bdsr.persist()`，启用边界显示状态持久化。
* 增加 `bdsr.persist(false)`，关闭边界显示状态持久化。
* 增加 `bdsr.reset()`，清除当前页面的持久化状态、注销跨标签页监听并关闭边界显示。
* 使用 localStorage 保存持久化开关状态。
* 支持页面刷新后恢复已持久化的边界显示状态。
* 支持同源标签页之间同步持久化开关状态。
* 增加启用持久化、关闭持久化和重置状态相关的控制台快捷命令。
* 增加 `whenDomReady()`，用于在 DOM 就绪后执行恢复或状态同步操作。
* 在 README 中加入 GitHub 仓库链接。

### Changed

* 将默认边界操作拆分到 `operations/bounds.ts`。
* 增加 `operations/persistence.ts`，用于处理持久化状态和跨标签页同步。
* 增加 `operations/preDoes.ts`，用于恢复保存的状态。
* 增加 `runtimeState.ts`，集中保存运行时状态和 storage key。
* 使用状态码区分当前边界显示状态与持久化状态。
* 将调试样式数据文件从 `style.ts` 重命名为 `styleForType.ts`。
* 更新 ESM、IIFE、SSR 与多语言 README 的初始化说明。

## [0.4.2] - 2026-09-22

### Added

* 加入了一些注释

### Fixed

* 删除了CHANGELOG中一个多余的*

## [0.4.1] - 2026-09-22

### Added

* 在package.json中加入了公开发布的属性

### Fixed

* 修复了README中一个语意不明的地方

## [0.4.0] - 2026-09-21

### Added

* 增加简体中文、繁体中文和日文控制台快捷命令。
* 支持直接在浏览器控制台输入快捷命令，不需要输入点号和括号。
* 为常用HTML标签生成独立的边界颜色。
* 为常用SVG标签生成独立的边界颜色。
* 使用HSL色相自动生成标签颜色。

### Changed

* 扩展元素边界颜色规则，未单独配置的元素继续使用默认颜色。
* 将IIFE全局名称调整为`bdsr`。
* 增加README中的SSR使用示例。
* 将文档中的使用方式调整为“使用构建工具”和“不使用构建工具”。
* 更新英文、简体中文、繁体中文和日文使用文档。

## [0.3.2] - 2026-09-21

### Changed

* 修改CSS的一个!important

## [0.3.1] - 2026-09-21

### Added

* 增加package.json的非私有标记

## [0.3.0] - 2026-09-20

### Added

* 增加 ESM 构建产物。
* 增加 IIFE 构建产物。
* 支持在不使用构建工具的原生 HTML、CSS、JavaScript 项目中使用。
* 增加 TypeScript 类型声明。
* 增加 `Window.bdsr` 全局类型声明。

### Changed

* 使用 `tsdown` 作为库构建工具。
* 调整 npm 包入口和 `exports` 配置。
* 修改on和off返回值的函數名

## [0.2.0] - 2026-09-20

### Added

* 按 HTML 标签为元素分配不同颜色的边界。
* 使用动态 CSS 控制边界显示。
* 增加可视元素数量统计。

### Fixed

* 支持重复开启时避免重复注入样式。
* 关闭时移除动态注入的样式和激活状态。

## [0.1.0] - 2026-09-19

### Added

* 创建项目骨架。
* 增加 TypeScript 配置。
* 增加浏览器控制台对象 `window.bdsr`。
* 增加 `bdsr.on()` 和 `bdsr.off()` 基础接口。
