interface RefState{
    readonly refCount: number;
    plusRefCount():void;
    minusRefCount():void;
}
function createRefState():RefState {
    let refCount = 0;
    return {
        get refCount(): number {
            return refCount;
        },
        plusRefCount(): void {
            refCount++;
        },
        minusRefCount(): void {
            refCount--;
        },
    };
}
export {type RefState, createRefState};