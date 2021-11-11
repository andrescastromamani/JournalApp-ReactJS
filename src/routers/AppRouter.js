import React from 'react'
import { Route, Routes } from 'react-router';
import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<JournalPage />} />
                <Route path="auth/*" element={<AuthRouter />} />
            </Routes>
            
        </>

    )
}
