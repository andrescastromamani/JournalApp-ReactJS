import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { login } from '../actions/auth';
import { JournalPage } from '../components/journal/JournalPage';
import { AuthRouter } from './AuthRouter';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [cheking, setCheking] = useState(true);
    const [islogged, setIslogged] = useState(false);
    useEffect(() => {
        onAuthStateChanged(getAuth(), (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIslogged(true);
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
                <Route path="/" element={<JournalPage />} />
                <Route path="auth/*" element={<AuthRouter />} />
            </Routes>

        </>

    )
}
