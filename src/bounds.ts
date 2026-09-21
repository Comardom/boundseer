import type {RefState} from "./utils/state";
import {createRefState} from "./utils/state";
import { ActiveClass, fullStyles, StyleId } from './data/style'
import {getNumOfVisibleElements} from "./utils/checkElements";

let refRootState:RefState = createRefState();
let styleEl: HTMLStyleElement | null = null
function on():number {
    // 如果计数不为零就退出
    if(refRootState.refCount) {
        console.log("already exists");
        return -1;
    }
    // 执行注入CSS并检查状态
    if (!injectStyle()) {
        console.log('failed to inject style')
        return -1;
    }
    // 增加引用计数
    refRootState.plusRefCount();
    console.log("layout bounds show");
    // 临时显示这个
    return getNumOfVisibleElements();
}
function off():number {
    // 如果计数为零就退出
    if(!refRootState.refCount){
        console.log("not exists");
        return -1;
    }
    // 执行删除对应CSS并检查状态
    if (!removeStyle()) {
        console.log('failed to remove style')
        return -1;
    }
    // 减少引用计数
    refRootState.minusRefCount();
    console.log("layout bounds are hidden");
    // 临时显示这个
    return getNumOfVisibleElements();
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