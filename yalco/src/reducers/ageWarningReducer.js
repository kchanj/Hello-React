export const initialState = {
    name: '',
    year: '',
    warning: ''
}

export function reducer(state, action) {
    console.log("reducer", state);

    const type = action.type;
    const value = action.value;

    if(type === 'SET_NAME') {
        return {
            ...state,
            name: value.trim().toUpperCase()
        };
    } else if(type === 'SET_YEAR') {
        let message = '';
        let age = new Date().getFullYear() - value;
        if(age < 18) {
            message = 'Must be at least 18 yrs old!';
        } else {
            message = 'Ok Ok';
        }

        return {
            ...state,
            year: value,
            warning: message
        };
    } else if(type === 'RESET') {
        return initializer(action.state);
    } else {
        throw new Error('Unknown action type');
    }
}

export function initializer(state) {
    return {
        ...initialState,
        name: state.name,
        year: state.year
    };
}