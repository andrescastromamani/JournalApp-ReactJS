import React from 'react'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
                <hr />
                <button type="button">Google</button>
            </form>
        </div>
    )
}
