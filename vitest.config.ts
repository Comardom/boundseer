import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom', // 开启浏览器 DOM 模拟
    },
});