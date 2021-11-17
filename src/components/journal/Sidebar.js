import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log('logout');
        dispatch(startLogout());
    }
    return (
        <aside className="journal__sidebar">
            <div className="journal__header mt-1">
                <h3>
                    <i className="fas fa-user"></i>
                    <span> Andres</span>
                </h3>
                <button className="journal__btn" onClick={handleLogout}>Logout</button>
            </div>
            <div className="journal__newentry">
                <i className="far fa-calendar-plus"></i>
                <p className="mt-1">New Entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
