import request from './Interceptor'


export const getLocalStorage = (key) => {
    const JSONtoken = localStorage.getItem(key)
    const token = JSON.parse(JSONtoken)
    return token
}

export const loginAccount = (payload) => {
    return request({
        url: '/auth/login',
        method: 'POST',
        data: payload
    })
}