import React from 'react'
import { Sidebar } from './Sidebar'

export const JournalPage = () => {
    return (
        <div className="journal__main">
            <Sidebar />
            <main className="journal_content">
                <h1>Journal</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur,
                </p>
            </main>
        </div>
    )
}
