export const initialState = {
    isLogin: 'idle',
    user: null
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'DO_LOGIN_SUCCESS':
            return {
                ...state,
                isLogin: 'done',
                user: action.payload
            }
        default:
            break;
    }
}


