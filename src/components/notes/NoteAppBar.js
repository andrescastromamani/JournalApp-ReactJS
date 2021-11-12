import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="note__appbar">
            <span className="note__appbar__title">30 noviembre 2021</span>
            <div>
                <button className="journal__btn">Picture</button>
                <button className="journal__btn">Save</button>
            </div>
        </div>
    )
}
