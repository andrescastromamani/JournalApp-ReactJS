import { doc, updateDoc, deleteDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
import { db, collection, addDoc } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
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
        dispatch(addNewNote(docRef.id, newNote));
    }
}

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id,
        ...note
    }
});
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
        if (!note.url) {
            delete note.url;
        }
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await updateDoc(doc(db, `${uid}/journal  /notes/${note.id}`), note);
        dispatch(refreshNote(note.id, noteToFirestore));
        Swal.fire('Saved', 'Your note has been saved', 'success');
    }
}
export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        ...note
    }
})

export const startSavePicture = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });
        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleteNote = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        await deleteDoc(doc(db, `${uid}/journal  /notes/`, id));
        dispatch(deleteNote(id));
    }
}
export const deleteNote = (id) => ({
    type: types.notesDeleted,
    payload: id
})

export const notesLogoutClean = () => ({
    type: types.notesLogoutClean
})