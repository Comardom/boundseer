import { rootState, StorageKey } from "../runtimeState";
import { off } from "./bounds";
import { destroyOtherTabsWatcher } from "./persistence";
import { isBoundsActive } from "../utils/state";

function reset() {
    localStorage.removeItem(StorageKey);
    destroyOtherTabsWatcher();
    if (isBoundsActive(rootState.stateCode)) {
        off();
    }
    rootState.stateCode = 0;
}
export { reset };