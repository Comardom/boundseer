import { rootState, StorageKey } from "../runtimeState";
import { ActiveClass, fullStyles, StyleId } from '../data/styleForType'
import { isBoundsActive, setBounds } from "../utils/state";


let styleEl: HTMLStyleElement | null = null
function on():number {
    if(isBoundsActive(rootState.stateCode) && styleEl) {
        console.log("already exists");
        return -1;
    }
    // 执行注入CSS并检查状态
    if (!injectStyle()) {
        console.log('failed to inject style')
        return -1;
    }
    // 设置开启状态
    rootState.stateCode = setBounds(rootState.stateCode, true);
    if(localStorage.getItem(StorageKey)) {
        localStorage.setItem(StorageKey, '1');
    }
    console.log("layout bounds show");
    return 1;
}
function off():number {
    if(!isBoundsActive(rootState.stateCode) && !styleEl) {
        console.log("not exists");
        return -1;
    }
    // 执行删除对应CSS并检查状态
    if (!removeStyle()) {
        console.log('failed to remove style')
        return -1;
    }
    // 设置关闭状态
    rootState.stateCode = setBounds(rootState.stateCode, false);
    if(localStorage.getItem(StorageKey)) {
        localStorage.setItem(StorageKey, '0');
    }
    console.log("layout bounds are hidden");
    return 1;
}

function injectStyle():boolean {
    if (!document.body || !document.head) {
        return false;
    }
    // 创建并填充CSS
    styleEl = document.createElement('style');
    styleEl.textContent = fullStyles
    // 添加ID方便DevTools中识别
    styleEl.id = StyleId
    // 加入CSS后给body上class
    document.head.appendChild(styleEl);
    document.body.classList.add(ActiveClass);
    return true;
}
function removeStyle():boolean {
    if (!document.body || !styleEl) {
        return false;
    }
    // 删除body的这个class
    document.body.classList.remove(ActiveClass);
    // 释放这个对象
    styleEl.remove();
    styleEl = null;
    return true;
}
export { on, off };