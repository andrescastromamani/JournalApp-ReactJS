import Swal from 'sweetalert2'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import { provider, signInWithPopup, getAuth } from '../firebase/firebaseConfig';
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';
import { notesLogoutClean } from './notes';

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
                Swal.fire('error', error.message, 'error');
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
                Swal.fire('error', err.message, 'error');
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
        dispatch(notesLogoutClean());
    }
}
export const logout = () => {
    return {
        type: types.logout
    }
}
