import { createUserWithEmailAndPassword } from '@firebase/auth';
import { provider, signInWithPopup, getAuth } from '../firebase/firebaseConfig';
import { types } from "../types/types"

export const authStart = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'admin123'))
        }, 3500)
    }
}
export const registerStart = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(({ user }) => {
                console.log(user);
                user.displayName = name;
                dispatch(login(user.uid, user.displayName))
            })
            .catch(err => {
                console.log(err)
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
            .catch(err => {
                console.log(err);
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