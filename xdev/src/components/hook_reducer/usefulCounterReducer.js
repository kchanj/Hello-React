const reducer = (state, aciton) => {
    const {type, value} = aciton.payload;
    const {x, y} = aciton.metainf;

    console.log(`[reducer] Click (${x}, ${y})`)

    let nstate = {};
    switch(type) {
        case 'ADD':
            nstate = {
                ...state,
                count: state.count + value
            }
            break;
        case 'SUB':
            nstate = {
                ...state,
                count: state.count - value
            }
            break;
        default:
            throw new Error('Unknown action type');
    }

    return nstate;
}

const istate = {
    count: 0
}

export {reducer, istate};