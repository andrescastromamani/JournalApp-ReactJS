import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { provider, signInWithPopup, getAuth } from '../firebase/firebaseConfig';
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';

export const authStart = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        signInWithEmailAndPassword(getAuth(), email, password)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(finishLoading());
            })
            .catch(error => {
                console.log(error);
                dispatch(finishLoading());
            })
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
export const startLogout = () => {
    return async (dispatch) => {
        await signOut(getAuth());
        dispatch(logout());
    }
}
export const logout = () => {
    return {
        type: types.logout
    }
}