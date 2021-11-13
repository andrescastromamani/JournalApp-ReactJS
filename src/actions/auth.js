import { types } from "../types/types"

export const authStart = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'admin123'))
        })
    }
}
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}