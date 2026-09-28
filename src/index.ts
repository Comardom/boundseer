import { on, off } from "./operations/bounds";
import type { Bdsr } from "./declaration/bdsr.type";
import {
    StraightOffCmd,
    StraightOnCmd,
    StraightPersistCmd,
    StraightPersistFalseCmd,
    StraightResetCmd
} from "./data/straightCmd";
import { persist } from "./operations/persistence";
import { reset } from "./operations/reset";
import { preDoesOnStart } from "./operations/preDoes";
declare global {
    interface Window {
        bdsr: Bdsr;
    }
}
// 向window挂一个对象
const bdsr = {
    setupBoundseer,
    on,
    off,
    persist,
    reset,
};
window.bdsr = bdsr;
function setupBoundseer():void {
    // 向window挂需要执行的内容
    for(const cmd of StraightOnCmd) {
        Object.defineProperty(window, `${ cmd }`, {
            configurable: true,
            get() {
                return on();
            },
        });
    }
    for(const cmd of StraightOffCmd) {
        Object.defineProperty(window, `${ cmd }`, {
            configurable: true,
            get() {
                return off();
            },
        });
    }
    for(const cmd of StraightPersistCmd) {
        Object.defineProperty(window, `${ cmd }`, {
            configurable: true,
            get() {
                return persist();
            }
        })
    }
    for(const cmd of StraightPersistFalseCmd) {
        Object.defineProperty(window, `${ cmd }`, {
            configurable: true,
            get() {
                return persist(false);
            }
        });
    }
    for(const cmd of StraightResetCmd) {
        Object.defineProperty(window, `${ cmd }`, {
            configurable: true,
            get() {
                return reset();
            }
        });
    }
    preDoesOnStart(on, off);
}
export type { Bdsr }
export { setupBoundseer };