import { useState } from "react"
import { registerUser, loginUser } from "../../api/authApi"
import "./AuthPage.css"

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        first_name: "",
        second_name: "",
        phone: "",
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({ 
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setMessage("")
        setError("")

        try {
            let data

            if (isLogin) {
                data = await loginUser({
                    email: formData.email,
                    password: formData.password,
                })
            } else {
                data = await registerUser(formData)
            }

            localStorage.setItem("token", data.token)
            localStorage.setItem("user", JSON.stringify(data.user))

            setMessage(data.message)
            console.log("Пользователь:", data.user)
            console.log("Токен:", data.token)
        } catch (error) {
            setError(
                error.response?.data?.message || "Произошла ошибка"
            )
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1 className="auth-title">
                    {isLogin ? "Вход" : "Регистрация"}
                </h1>

                <p className="auth-subtitle">
                    {isLogin
                        ? "Войдите в аккаунт SPORTMAXIMUS"
                        : "Создайте аккаунт SPORTMAXIMUS"}
                </p>

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="first_name"
                                placeholder="Имя"
                                value={formData.first_name}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="second_name"
                                placeholder="Фамилия"
                                value={formData.second_name}
                                onChange={handleChange}
                            />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Телефон"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </>
                    )}

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
                        placeholder="Пароль"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    {message && (
                        <p className="auth-message success">{message}</p>
                    )}

                    {error && (
                        <p className="auth-message error">{error}</p>
                    )}

                    <button type="submit" className="auth-button">
                        {isLogin ? "Войти" : "Зарегистрироваться"}
                    </button>
                </form>

                <button
                    className="auth-switch"
                    onClick={() => {
                        setIsLogin(!isLogin)
                        setMessage("")
                        setError("")
                    }}
                >
                    {isLogin
                        ? "Нет аккаунта? Зарегистрироваться"
                        : "Уже есть аккаунт? Войти"}
                </button>
            </div>
        </div>
    )
}

export default AuthPage