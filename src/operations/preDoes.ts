import { whenDomReady } from "../utils/checkElements";
import { StorageKey, rootState } from "../runtimeState"
import { registerOtherTabsWatcher } from "./persistence";
import { isBoundsActive, isPersistenceActive, setBounds, setPersistence } from "../utils/state";


function restoreStateCodeFromLocalStorage(): void {
    const value = localStorage.getItem(StorageKey);
    if (value === '1') {
        // 持久化开启，边界开启
        rootState.stateCode = setPersistence(setBounds(rootState.stateCode, true), true);
    }
    else if (value === '0') {
        // 持久化开启，边界关闭
        rootState.stateCode = setPersistence(setBounds(rootState.stateCode, false), true);
    }
    else if (value === null) {
        rootState.stateCode = setPersistence(rootState.stateCode, false);
    }
    else {
        console.warn("error in restoreStateCodeFromLocalStorage");
        return;
    }
    console.log("restoreStateCodeFromLocalStorage done");
}
function onceOnWhenStart(on: () => number, off: () => number): void {
    if (!isPersistenceActive(rootState.stateCode)) {
        return;
    }
    if (isBoundsActive(rootState.stateCode)) {
        whenDomReady(on);
    }
    else if (!isBoundsActive(rootState.stateCode)) {
        whenDomReady(off);
    }
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
export { StorageKey, preDoesOnStart };