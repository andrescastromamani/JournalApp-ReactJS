import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
    return (
        <>
            <h1 className="auth__title">Register</h1>
            <form className="form">
                <label className="input__label">Name</label>
                <input className="auth__input" type="text" name="name" placeholder="Name" autoComplete="off" />
                <label className="input__label">Email</label>
                <input className="auth__input" type="email" name="email" placeholder="email@email.com" autoComplete="off" />
                <label className="input__label">Password:</label>
                <input className="auth__input" type="password" name="password" />
                <label className="input__label">Password Confirm:</label>
                <input className="auth__input" type="password" name="passwordconfirm" />
                <button className="btn" type="submit">Register</button>
                <Link className="create__acount" to="/auth/login">
                    Already have an account?
                </Link>
            </form>
        </>
    )
}
