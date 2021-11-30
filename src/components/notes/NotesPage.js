import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NotesPage = () => {
    const { active } = useSelector(state => state.notes)
    const [values, handleInputChange] = useForm(active)
    const { body, title } = values
    return (
        <div className="notes__main">
            <NoteAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Title" className="notes__input" value={title} onChange={handleInputChange} />
                <textarea placeholder="Write your note here" className="notes__textarea" value={body} onChange={handleInputChange} />
                <div className="notes__image">
                    <img src="https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/instalacion-de-nodejs-en-ubuntu-t1.jpg" alt="save" />
                </div>
            </div>
        </div>
    )
}
