import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="journal__header mt-1">
                <h3>
                    <i className="fas fa-user"></i>
                    <span> Andres</span>
                </h3>
                <button>Logout</button>
            </div>
            <div className="journal__newentry">
                <i className="far fa-calendar-plus"></i>
                <p className="mt-1">New Entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
