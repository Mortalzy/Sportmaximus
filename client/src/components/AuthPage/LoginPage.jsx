import './AuthPage.css'
import Button from '../Button/Button'

import {loginUser} from "../../api/authApi.js"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { X } from 'lucide-react'

const LoginPage = () => {
    const navigate = useNavigate()
    
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
            const data = await loginUser(formData)

            console.log(data);

            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            if (data.user.role === 'ADMIN') {
                navigate('/admin')
            } else {
                navigate('/')
            }
            
        } catch(e) {
            setError(e.response?.data?.message || "Произошла ошибка")
            console.log(error);
        }
    }

    return (
        <div className='auth-page'>
            <div className='auth-card'>
                <Link className="auth-close" to='/'>
                    <X />
                </Link>

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

                <Link to="/register" className='auth-switch'>No account? Register</Link>

                <p className='auth-message error'>{error}</p>
            </div>
        </div>
    )
}

export default LoginPage