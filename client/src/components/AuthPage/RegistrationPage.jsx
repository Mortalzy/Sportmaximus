import "./AuthPage.css"
import Button from "../Button/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import {loginUser, registerUser} from '../../api/authApi.js'
import {X} from 'lucide-react'


const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        second_name: "",
        phone: "",
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
        
        console.log(formData);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setError("")

        try {
            const response = await registerUser(formData)

            alert("Вы успешно зарегистрировались! Теперь войдите в аккаунт)")

            console.log(response);
            
        } catch (e) {
            setError(e.response?.data?.message || "Произошла ошибка")
            console.log(error);
            
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link className="auth-close" to='/'>
                    <X />
                </Link>

                <h1 className="auth-title">Registration</h1>
                <p className="auth-subtitle">Register with SPORTMAKSIMUS</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <input 
                    type="text"
                    name="first_name" 
                    placeholder="First name"
                    value={formData.first_name}
                    onChange={handleChange}
                    />

                    <input 
                    type="text" 
                    name="second_name"
                    placeholder="Second name"
                    value={formData.second_name}
                    onChange={handleChange}
                    />

                    <input 
                    type="text"
                    name="phone" 
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    />
                    

                    <input 
                    type="email"
                    name="email" 
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    />

                    <input 
                    type="password" 
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    />

                    <Button type="submit" className="auth-button">REGISTER</Button>
                </form>
                
                <Link to="/login" className="auth-switch">Do you already have an account? Login</Link>

                <p className="auth-message error">{error}</p>
            </div>
            
        </div>
    )
}

export default RegistrationPage