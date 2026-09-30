import { digit, setDigit } from "../utils/digit";
import { whenDomReady } from "../utils/checkElements";
import { StorageKey, rootState } from "../runtimeState"
import { registerOtherTabsWatcher } from "./persistence";


function restoreStateCodeFromLocalStorage(): void {
    const value = localStorage.getItem(StorageKey);
    if (value === '1') {
        // 持久化开启，边界开启
        rootState.stateCode = setDigit(rootState.stateCode, 1, 1);
        rootState.stateCode = setDigit(rootState.stateCode, 0, 1);
    }
    else if (value === '0') {
        // 持久化开启，边界关闭
        rootState.stateCode = setDigit(rootState.stateCode, 1, 1);
        rootState.stateCode = setDigit(rootState.stateCode, 0, 0);
    }
    else if (value === null) {
        rootState.stateCode = setDigit(rootState.stateCode, 1, 0);
    }
    else {
        console.warn("error in restoreStateCodeFromLocalStorage");
        return;
    }
    console.log("restoreStateCodeFromLocalStorage done");
}
function onceOnWhenStart(on: () => number, off: () => number): void {
    if (digit(rootState.stateCode, 1) === 0) {
        return;
    }
    if (digit(rootState.stateCode, 0) === 1) {
        whenDomReady(on);
    }
    else if (digit(rootState.stateCode, 0) === 0) {
        whenDomReady(off);
    }
    // else if (digit(rootState.stateCode,1) === 2) {
    //     return;
    // }
    else {
        console.warn("unknown error on stateCode");
        return;
    }
    console.log("entrance resume done");
}

function preDoesOnStart(on: () => number, off: () => number): void {
    restoreStateCodeFromLocalStorage();
    onceOnWhenStart(on, off);
    registerOtherTabsWatcher();
}
export { rootState, StorageKey, preDoesOnStart };