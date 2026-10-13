interface State {
    // 提供一个状态码
    stateCode: number;
}
// 提供状态码的创建
function createState(code: number = 0): State {
    // 返回对象
    return {
        stateCode: code,
    }
}
// 这个是用于状态码计算的掩码
const BDSR_MASKS = {
    BOUNDS_ACTIVE:      0b1 << 0, // 01
    PERSISTENCE_ACTIVE: 0b1 << 1, // 10
} as const;
function isBoundsActive(code: number): boolean {
    return (code & BDSR_MASKS.BOUNDS_ACTIVE) === BDSR_MASKS.BOUNDS_ACTIVE;
}
function isPersistenceActive(code: number): boolean {
    return (code & BDSR_MASKS.PERSISTENCE_ACTIVE) === BDSR_MASKS.PERSISTENCE_ACTIVE;
}
function setBounds(code: number, isActive: boolean): number {
    return isActive
        ? code | BDSR_MASKS.BOUNDS_ACTIVE
        : code & ~BDSR_MASKS.BOUNDS_ACTIVE;
}
function setPersistence(code: number, isActive: boolean): number {
    return isActive
        ? code | BDSR_MASKS.PERSISTENCE_ACTIVE
        : code & ~BDSR_MASKS.PERSISTENCE_ACTIVE;
}
export {
    type State,
    createState,
    isBoundsActive,
    isPersistenceActive,
    setBounds,
    setPersistence
};