import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { login } from '../../actions/auth'

export const LoginPage = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useForm({
        email: 'admin@admin.com',
        password: 'admin123'
    });
    const { email, password } = values;
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(123,'andres'));
    }
    return (
        <>
            <h1 className="auth__title">Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <label className="input__label">Email</label>
                <input className="auth__input" type="email" name="email" value={email} onChange={setValues} placeholder="email@email.com" autoComplete="off" />
                <label className="input__label">Password:</label>
                <input className="auth__input" type="password" name="password" value={password} onChange={setValues} />
                <button className="btn" type="submit">Login</button>

                <div className="social__networks">
                    <p className="social__title">Login with social networks</p>
                    <div>
                        <a className="google__btn" href="www.google.com">
                            <img className="google__icon" width="15px" alt="Google login" src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" />
                            Sign in with Google
                        </a>
                    </div>
                </div>
                <Link className="create__acount" to="/auth/register">
                    Create an account
                </Link>
            </form>
        </>
    )
}
