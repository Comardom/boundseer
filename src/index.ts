import {on, off } from "./bounds";
import type { Bdsr } from "./declaration/bdsr.type";
import {StraightOffCmd, StraightOnCmd} from "./data/straightCmd";
declare global {
    interface Window {
        bdsr: Bdsr
    }
}
const bdsr = {
    on,
    off,
};
for (const cmd of StraightOnCmd) {
    Object.defineProperty(window, `${ cmd }`, {
        configurable: true,
        get() {
            return on();
        },
    })
}
for (const cmd of StraightOffCmd) {
    Object.defineProperty(window, `${ cmd }`, {
        configurable: true,
        get() {
            return off();
        },
    })
}
window.bdsr = bdsr;
export type { Bdsr }