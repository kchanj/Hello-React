const reducer = (state, action) => {
    const {type, payload} = action;

    let nstate = {};
    switch(type) {
        case 'SET_NAME':
            const {name} = payload;
            nstate = {
                ...state,
                name: name
            };
            break;
        case 'SET_YEAR':
            const {year} = payload;
            const age = new Date().getFullYear() - year;
            let warning = istate.warning;
            let message = istate.message;

            if(age < 18) {
                  warning = true;
                  message = 'Must be at least 18 yrs old!';
            }

            nstate = {
                ...state,
                year: year,
                age: age,
                warning: warning,
                message: message
            };
            break;
        case 'RESET':
            const {dstate} = payload;
            nstate = init(dstate);
            break;
        default:
            throw new Error('Unknown action type');
    }

    return nstate;
}

const istate = {
    name: '',
    year: '',
    age: '',
    warning: false,
    message: 'Pass'
}

const init = (state) => {
    const {name, year} = state;

    const age = new Date().getFullYear() - year;
    if(age < 18) {
        return {
            ...istate,
            name: state.name,
            year: state.year,
            age: age,
            warning: true,
            message: 'Must be at least 18 yrs old!'
        }
    } else {
        return {
            ...istate,
            name: state.name,
            year: state.year,
            age: age
        }
    }
}

export {reducer, istate, init};