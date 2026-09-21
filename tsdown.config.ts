import { defineConfig } from 'tsdown'

export default defineConfig({
    target: 'ES2020',
    entry: ['src/index.ts'],
    format: ['esm', 'iife'],
    outDir: 'dist',
    // 构建前清空dist
    clean: true,
    // 生成d.ts类型声明
    dts: true,
    globalName: 'bdsr',
})