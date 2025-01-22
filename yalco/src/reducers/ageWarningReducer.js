export const _state = {
    name: '',
    year: '',
    warning: ''
}

export function _reducer(state, action) {
    const type = action.type;
    const value = action.value;
    const data = action.data;

    if(type === 'SET_NAME') {
        const newState = {
            ...state,
            name: value.trim().toUpperCase()
        }

        return newState;
    } else if(type === 'SET_YEAR') {
        let message = '';
        let age = new Date().getFullYear() - value;
        if(age < 18) {
            message = 'Must be at least 18 yrs old!';
        } else {
            message = 'Ok Ok';
        }

        const newState = {
            ...state,
            year: value,
            warning: message
        }

        return newState;
    } else if(type === 'RESET') {
        const newState = _init(data);

        return newState;
    } else {
        throw new Error('Unknown action type');
    }
}

export function _init(state) {
    const newState = {
        ..._state,
        name: state.name,
        year: state.year
    }

    return newState;
}