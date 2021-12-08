import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startSavePicture } from '../../actions/notes';

export const NoteAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const handleSave = () => {
        console.log(active);
        dispatch(startSaveNote(active))
    }
    const handlePicture = () => {
        document.querySelector('#file').click();
    }
    const handlePictureChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startSavePicture(file))
        }
    }
    return (
        <div className="note__appbar">
            <span className="note__appbar__title">30 noviembre 2021</span>
            <div>
                <input type="file" style={{ display: 'none' }} id="file" onChange={handlePictureChange} name="file" />
                <button className="journal__btn" onClick={handlePicture}>Picture</button>
                <button className="journal__btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}
