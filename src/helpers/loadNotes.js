import { db, collection, getDocs } from "../firebase/firebaseConfig"

export const loadNotes = async (uid) => {
    console.log(uid);
    const querySnapshot = await getDocs(collection(db, `${uid}/journal  /notes`));
    const notes = [];
    querySnapshot.forEach((doc) => {
        notes.push({
            id: doc.id,
            ...doc.data()
        });
    });
    console.log(notes);
    return notes;
}
