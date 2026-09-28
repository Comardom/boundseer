interface State {
    stateCode: number;
}
function createState():State {
    let code = 0;
    return {
        get stateCode(): number {
            return code;
        },
        set stateCode(value:number) {
            code = value;
        },
    };
}
export {type State, createState};