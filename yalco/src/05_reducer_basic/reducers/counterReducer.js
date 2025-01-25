export const initialCounter = {
    count: 0
}

export function counterReducer(state, action) {
    const cmd = action.cmd;
    const val = action.val;
    const { x, y } = action.pos;

    console.log(`On Click  (${x}, ${y})`);
    if(cmd === "DEC") {
        return {
            count: state.count - val
        }
    } else if(cmd === "INC") {
        return {
            count: state.count + val
        }
    } else {
        throw new Error("Unknown action type");
    }
}