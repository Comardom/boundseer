import {on, off } from "./bounds";
import type { Bdsr } from "./declaration/bdsr.type";
import {StraightOffCmd, StraightOnCmd} from "./data/straightCmd";
declare global {
    interface Window {
        bdsr: Bdsr
    }
}
// 向window挂一个对象
const bdsr = {
    on,
    off,
};
window.bdsr = bdsr;
// 向window挂需要执行的内容
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
export type { Bdsr }