import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator';

import { useForm } from '../../hooks/useForm'

export const RegisterPage = () => {
    const [values, setVelues] = useForm({
        name: 'Daniel Castro',
        email: 'daniel@gmail.com',
        password: 'daniel123',
        confirmPassword: 'daniel123'
    });
    const { name, email, password, confirmPassword } = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        if (isFormValid()) {
            console.log('Form is valid');
        }

    }
    const isFormValid = () => {
        if (name.trim().length === 0) {
            console.log('Name is required');
            return false;
        } else if (validator.isEmail(email) === false || email.trim().length === 0) {
            console.log('Email is not valid');
            return false;
        } else if (password !== confirmPassword || password.length < 6) {
            console.log('Password is not match');
            return false;
        }
        return true;
    }
    return (
        <>
            <h1 className="auth__title">Register</h1>
            <form className="form" onSubmit={handleSubmit}>
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
