import React from 'react'
import { NotesPage } from '../notes/NotesPage'
import { Sidebar } from './Sidebar'

export const JournalPage = () => {
    return (
        <div className="journal__main">
            <Sidebar />
            <main className="journal_content">
                <NotesPage />
            </main>
        </div>
    )
}
