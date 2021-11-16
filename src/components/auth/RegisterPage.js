import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator';

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui';

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);
    const [values, setVelues] = useForm({
        name: 'Daniel Castro',
        email: 'daniel@gmail.com',
        password: 'daniel123',
        confirmPassword: 'daniel123'
    });
    const { name, email, password, confirmPassword } = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Form is valid');
        }

    }
    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Name is required'));
            return false;
        } else if (validator.isEmail(email) === false || email.trim().length === 0) {
            dispatch(setError('Email is invalid'));
            return false;
        } else if (password !== confirmPassword || password.length < 6) {
            dispatch(setError('Different Password'));
            return false;
        }
        dispatch(removeError());
        return true;
    }
    return (
        <>
            <h1 className="auth__title">Register</h1>
            <form className="form" onSubmit={handleSubmit} noValidate>
                {
                    msgError && <div className="form__alert">{msgError}</div>
                }
                <label className="input__label">Name</label>
                <input className="auth__input" type="text" name="name" placeholder="Name" autoComplete="off" value={name} onChange={setVelues} />
                <label className="input__label">Email</label>
                <input className="auth__input" type="email" name="email" placeholder="email@email.com" autoComplete="off" value={email} onChange={setVelues} />
                <label className="input__label">Password:</label>
                <input className="auth__input" type="password" name="password" value={password} onChange={setVelues} />
                <label className="input__label">Password Confirm:</label>
                <input className="auth__input" type="password" name="passwordconfirm" value={confirmPassword} onChange={setVelues} />
                <button className="btn" type="submit">Register</button>
                <Link className="create__acount" to="/auth/login">
                    Already have an account?
                </Link>
            </form>
        </>
    )
}
