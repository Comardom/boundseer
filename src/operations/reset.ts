import { rootState, StorageKey } from "../runtimeState";
import { off } from "./bounds";
import { destroyOtherTabsWatcher } from "./persistence";

function reset() {
    localStorage.removeItem(StorageKey);
    destroyOtherTabsWatcher();
    off();
    rootState.stateCode = 0;
}
export { reset };