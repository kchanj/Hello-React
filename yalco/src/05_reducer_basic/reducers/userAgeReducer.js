/** state를 변경하는 함수 */
export function userReducer(user, action) {

    const type = action.type;
    const value = action.value;

    if(type === 'SET_NAME') {
        return {
            ...user,
            name: value.trim().toUpperCase()
        };
    } else if(type === 'SET_YEAR') {
        let age = new Date().getFullYear() - value;
        let message = 'Ok';
        if(age < 18) {
            message = 'Must be at least 18 years old!';
        }

        return {
            ...user,
            year: value,
            warning: message
        };
    } else if(type === 'RESET') {
        return init(value);
    }

    throw new Error('[ERROR] unknown action type');
}

/** 기본 데이터 */
export const iuser = {
    name: '',
    year: '',
    warning: ''
}

/** 외부 데이터 */
export const euser = {
    name: 'jane doe',
    year: 1995
}

export function init(user) {
    return {
        ...iuser,
        name: user.name,
        year: user.year
    };
}