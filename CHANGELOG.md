# Changelog
## [0.3.1] - 2026-09-20

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
