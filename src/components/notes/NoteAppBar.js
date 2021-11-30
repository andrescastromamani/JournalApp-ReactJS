import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NoteAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        console.log(active);
        dispatch(startSaveNote(active))
    }
    return (
        <div className="note__appbar">
            <span className="note__appbar__title">30 noviembre 2021</span>
            <div>
                <button className="journal__btn">Picture</button>
                <button className="journal__btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
