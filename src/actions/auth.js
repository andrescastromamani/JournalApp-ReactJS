import { provider, signInWithPopup, getAuth } from '../firebase/firebaseConfig';
import { types } from "../types/types"

export const authStart = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'admin123'))
        })
    }
}
export const authGoogleStart = () => {
    return (dispatch) => {
        signInWithPopup(getAuth(), provider)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))
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