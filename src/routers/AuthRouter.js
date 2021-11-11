import React from 'react'
import { Route, Routes } from 'react-router';

import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';

export const AuthRouter = () => {
    return (
        <div className="auth_main">
            <div className="auth_boxcontainer">
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </div>
    )
}
