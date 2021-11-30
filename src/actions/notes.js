import { doc, updateDoc } from "@firebase/firestore";
import { db, collection, addDoc } from "../firebase/firebaseConfig";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        console.log(uid);
        const newNote = {
            title: '',
            body: '',
            url: '',
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

export const startLoadNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await updateDoc(doc(db, `${uid}/journal  /notes/${note.id}`), note);
    }
}
