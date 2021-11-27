import { db, collection, addDoc } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const startNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log(uid);
        const newNote = {
            title: '',
            body: '',
            createdAt: new Date().getTime(),
        }
        const docRef = await addDoc(collection(db, `${uid}/journal  /notes`), newNote);
        console.log(docRef);
        dispatch(activeNote(docRef.id, newNote));
    }
}

export const activeNote = (id, note) => (
    {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
)

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})
