import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NoteAppBar } from './NoteAppBar'

export const NotesPage = () => {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes)
    const [values, handleInputChange, reset] = useForm(active)
    const { body, title } = values
    const activeId = useRef(active.id)
    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active)
            activeId.current = active.id
        }
    }, [reset, active])

    useEffect(() => {
        dispatch(activeNote(values.id, { ...values }));
    }, [dispatch, values])
    return (
        <div className="notes__main">
            <NoteAppBar />
            <div className="notes__content">
                <input type="text" placeholder="Title" name="title" className="notes__input" value={title} onChange={handleInputChange} />
                <textarea placeholder="Write your note here" name="body" className="notes__textarea" value={body} onChange={handleInputChange} />
                {
                    active.url &&
                    <div className="notes__image">
                        <img src={active.url} alt="save" />
                    </div>
                }
            </div>
        </div>
    )
}
