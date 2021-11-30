import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { startLoadNotes } from '../actions/notes';
import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [islogged, setIslogged] = useState(false);
    useEffect(() => {
        onAuthStateChanged(getAuth(), async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIslogged(true);
                dispatch(startLoadNotes(user.uid));
            } else {
                setIslogged(false);
            }
            setCheking(false);
        })
    }, [dispatch]);
    if (cheking) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Routes>
                <Route path="/" element={
                    <PrivateRoute isLogged={islogged}>
                        <JournalPage />
                    </PrivateRoute>
                } />
                <Route path="auth/*" element={
                    <PublicRoute isLogged={islogged}>
                        <AuthRouter />
                    </PublicRoute>
                } />
            </Routes>
        </>

    )
}
