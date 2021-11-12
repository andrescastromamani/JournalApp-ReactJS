import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NotesPage = () => {
    return (
        <div className="notes__main">
            <NoteAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Title" className="notes__input" />
                <textarea placeholder="Write your note here" className="notes__textarea"/>
                <div className="notes__image">
                    <img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg" alt="save" />
                </div>
            </div>
        </div>
    )
}
