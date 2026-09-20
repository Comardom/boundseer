import { on, off } from "./bounds";
import type { Bdsr } from "./declaration/bdsr.type";
declare global {
  interface Window {
    bdsr: Bdsr
  }
}
const bdsr = {
  on,
  off,
};
window.bdsr = bdsr;
export type { Bdsr }