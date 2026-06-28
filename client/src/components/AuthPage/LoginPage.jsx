import './AuthPage'
import {loginUser} from "../../api/authApi.js"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("")

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setError("")

        try {
            const response = await loginUser({
                email: formData.email,
                password: formData.password,
            })

            console.log(response);
            
        } catch(e) {
            setError(e.response?.data?.message || "Произошла ошибка")
            console.log(error);
        }
    }

    return (
        <div className='auth-page'>
            <div className='auth-card'>
                <h1 className='auth-title'>Login</h1>
                <p className='auth-subtitle'>Login with SPORTMAKSIMUS</p>

                <form onSubmit={handleSubmit} className='auth-form'>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    />

                    <input 
                    type="password"
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    />

                    <Button type='submit' className="auth-button">LOGIN</Button>

                </form>

                <Link to="/" className='auth-switch'>No account? Register</Link>

                <p className='auth-message error'>{error}</p>
            </div>
        </div>
    )
}

export default LoginPage