/* ！！！此测试内容由AI编写！！！ */
import { describe, it, expect, beforeEach } from 'vitest';
import { isBoundsActive, isPersistenceActive, setBounds, setPersistence } from '../src/utils/state';
import { on, off } from '../src/operations/bounds';
import { persist } from '../src/operations/persistence';
import { reset } from '../src/operations/reset';
import { rootState, StorageKey } from '../src/runtimeState';
import { setupBoundseer } from '../src/index';

describe('1. 位运算状态码 (state.ts)', () => {
    it('默认状态码 0 应该均为 false', () => {
        expect(isBoundsActive(0)).toBe(false);
        expect(isPersistenceActive(0)).toBe(false);
    });

    it('能够独立开关 Bounds 和 Persistence 互不干扰', () => {
        let code = 0;
        code = setBounds(code, true);
        expect(isBoundsActive(code)).toBe(true);
        expect(isPersistenceActive(code)).toBe(false);

        code = setPersistence(code, true);
        expect(isBoundsActive(code)).toBe(true);
        expect(isPersistenceActive(code)).toBe(true);

        code = setBounds(code, false);
        expect(isBoundsActive(code)).toBe(false);
        expect(isPersistenceActive(code)).toBe(true);
    });
});

describe('2. 边界开关与 DOM 注入 (bounds.ts)', () => {
    beforeEach(() => {
        reset();
        document.body.innerHTML = '<div><p>Hello</p><svg><circle /></svg></div>';
    });

    it('on() 应该注入 <style> 并给 body 添加 bdsr-active 类', () => {
        const res = on();
        expect(res).toBe(1);
        expect(document.body.classList.contains('bdsr-active')).toBe(true);
        expect(document.getElementById('boundseer-style')).not.toBeNull();
        expect(isBoundsActive(rootState.stateCode)).toBe(true);
    });

    it('重复调用 on() 应该返回 -1', () => {
        on();
        expect(on()).toBe(-1);
    });

    it('off() 应该移除 <style> 和 body 类名', () => {
        on();
        const res = off();
        expect(res).toBe(1);
        expect(document.body.classList.contains('bdsr-active')).toBe(false);
        expect(document.getElementById('boundseer-style')).toBeNull();
        expect(isBoundsActive(rootState.stateCode)).toBe(false);
    });
});

describe('3. 持久化、刷新恢复与跨标签页同步 (persistence.ts & preDoes.ts)', () => {
    beforeEach(() => {
        reset();
    });

    it('persist(true) 应该将当前状态写入 localStorage ("1" 或 "0")', () => {
        on();
        persist(true);
        expect(localStorage.getItem(StorageKey)).toBe('1');
        expect(isPersistenceActive(rootState.stateCode)).toBe(true);

        off();
        expect(localStorage.getItem(StorageKey)).toBe('0');
    });

    it('persist(false) 应该清除 localStorage', () => {
        persist(true);
        persist(false);
        expect(localStorage.getItem(StorageKey)).toBeNull();
        expect(isPersistenceActive(rootState.stateCode)).toBe(false);
    });

    it('模拟页面刷新后调用 setupBoundseer() 应自动恢复开启状态', () => {
        // 模拟上次页面已经存了 '1'
        localStorage.setItem(StorageKey, '1');
        setupBoundseer();
        expect(isPersistenceActive(rootState.stateCode)).toBe(true);
        expect(isBoundsActive(rootState.stateCode)).toBe(true);
        expect(document.body.classList.contains('bdsr-active')).toBe(true);
    });

    it('模拟其他标签页修改 localStorage 应该自动同步开关状态', () => {
        persist(true);
        // 模拟其他标签页把值改成了 '1'
        window.dispatchEvent(new StorageEvent('storage', {
            key: StorageKey,
            newValue: '1',
        }));
        expect(isBoundsActive(rootState.stateCode)).toBe(true);
        expect(document.body.classList.contains('bdsr-active')).toBe(true);

        // 模拟其他标签页把值改成了 '0'
        window.dispatchEvent(new StorageEvent('storage', {
            key: StorageKey,
            newValue: '0',
        }));
        expect(isBoundsActive(rootState.stateCode)).toBe(false);
        expect(document.body.classList.contains('bdsr-active')).toBe(false);
    });
});

describe('4. 控制台快捷命令 (setupBoundseer)', () => {
    beforeEach(() => {
        reset();
        setupBoundseer();
    });

    it('访问 window["边来"] 和 window["边去"] 应该能直接开关边界', () => {
        const win = window as unknown as Record<string, unknown>;
        expect(win['边来']).toBe(1);
        expect(document.body.classList.contains('bdsr-active')).toBe(true);

        expect(win['边去']).toBe(1);
        expect(document.body.classList.contains('bdsr-active')).toBe(false);
    });
});