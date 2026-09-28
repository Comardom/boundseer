import { digit, setDigit } from "../utils/digit";
import { StorageKey, rootState } from "../runtimeState";
import { whenDomReady } from "../utils/checkElements";
import { off, on } from "./bounds";


function persist(wannaOpen:boolean = true): void {
    if(wannaOpen) {
        if(!digit(rootState.stateCode,1)) {
            // 先写入状态码，然后注册监听器，然后写入localStorage专门给刷新后和其他的同端口页面来判断
            rootState.stateCode = setDigit(rootState.stateCode,1,1);
            localStorage.setItem(StorageKey, String(digit(rootState.stateCode, 0)));
            registerOtherTabsWatcher();
            console.log("now persist");
            console.log("open persistence means " +
                "a monitor will be enabled to watch the state, " +
                "and if you want to close it, " +
                "press \"bdsr.persist(false)\"");
        }
        else {
            console.log("already open persistence or error, " +
                "try press \"bdsr.persist(false)\" or " +
                "\"bdsr.reset()\"");
        }
    }
    else {
        if(digit(rootState.stateCode,1)) {
            rootState.stateCode = setDigit(rootState.stateCode,1,0);
            localStorage.removeItem(StorageKey);
            // localStorage.setItem(StorageKey, '0');
            destroyOtherTabsWatcher();
            console.log("now not persist");
        }
        else {
            console.log("already close persistence or error, " +
                "try press \"bdsr.reset()\"");
        }
    }
}
function registerOtherTabsWatcher(): void {
    if (digit(rootState.stateCode, 1) === 1) {
        window.addEventListener(
            'storage',
            otherTabsWatcher
        );
    }
}
function destroyOtherTabsWatcher(): void {
    window.removeEventListener(
        'storage',
        otherTabsWatcher
    );
}
function otherTabsWatcher(e: StorageEvent): void {
    // 如果此次触发的localStorage事件和这个key无关，那么这一次就不触发回调，直接抛掉
    if (e.key !== StorageKey) {
        return;
    }
    // 有值存在就一定要处理
    const v = e.newValue;
    if (v === '1') {
        rootState.stateCode = setDigit(rootState.stateCode, 1, 1);
        if (!digit(rootState.stateCode, 0)) {
            whenDomReady(on);
        }
        return;
    }
    else if (v === '0') {
        rootState.stateCode = setDigit(rootState.stateCode, 1, 1);
        if (digit(rootState.stateCode, 0)) {
            whenDomReady(off);
        }
        return;
    }
    else if (v === null) {
        console.log("possibly there's a reset, try refresh");
        rootState.stateCode = setDigit(rootState.stateCode, 1, 0);
        destroyOtherTabsWatcher();
        return;
    }
    else {
        console.log("unknown error, try reset");
        return;
    }
}

export { persist, registerOtherTabsWatcher, destroyOtherTabsWatcher };