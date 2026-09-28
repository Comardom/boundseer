import type { State } from "./utils/state";
import { createState } from "./utils/state";
const StorageKey = 'boundseer:persistence:active';
let rootState:State = createState();
export { StorageKey, rootState }