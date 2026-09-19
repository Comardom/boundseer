import type {RefState} from "./state";
import {createRefState} from "./state";
import { ACTIVE_CLASS, styles } from './data/style'
import {getNumOfChangedElements} from "./utils/checkElements";

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
    return getNumOfChangedElements();
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
    return getNumOfChangedElements();
}

function injectStyle():boolean {
    if (!document.body || !document.head) {
        return false;
    }
    // 创建并填充CSS
    styleEl = document.createElement('style');
    styleEl.textContent = styles
    // 加入CSS后给body上class
    document.head.appendChild(styleEl);
    document.body.classList.add(ACTIVE_CLASS);
    return true;
}
function removeStyle():boolean {
    if (!document.body || !styleEl) {
        return false;
    }
    // 删除body的这个class
    document.body.classList.remove(ACTIVE_CLASS);
    // 释放这个对象
    styleEl.remove();
    styleEl = null;
    return true;
}
export { on, off };