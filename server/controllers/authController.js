import { User } from "../models/index.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

const generateToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },

        process.env.JWT_SECRET_KEY,

        {
            expiresIn: process.env.JWT_EXPIRES_IN || "7d",
        }
    )
}

const register = async (req, res) => {
    try {
        const {
            email,
            password,
            first_name,
            second_name,
            phone,
        } = req.body

        if(!email || !password || !first_name || !second_name) {
            return res.status(500).json({
                message: "Заполните обязательные поля"
            })
        }

        const candidate = await User.findOne( {
            where: {email},
        })

        if(candidate) {
            return res.status(500).json({
                message: "Пользователь с таким email уже существует"
            })
        }

        const password_hash = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password_hash,
            first_name,
            second_name,
            phone,
            role: "USER",
        })

        const token = generateToken(user)

        res.status(200).json({
            message: "Пользователь успешно зарегистрировался",
            token,
            user: {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                second_name: user.second_name,
                phone: user.phone,
                role: user.role,
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Ошибка при регистрации",
            error,
        })
    }
}

const login = async (req, res) => {
    try {
        const {    
            email,
            password,
        } = req.body

        if (!email || !password) {
            return res.status(500).json({
                message: "Введите email и пароль"
            })
        }

        const user = await User.findOne({
            where: {email}
        })

        if (!user) {
            return res.status(500).json({
                message: "Пользователь не найден"
            })
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        )

        if(!isPasswordValid) {
            return res.status(500).json({
                message: "Неверный пароль"
            })
        }

        const token = generateToken(user)

        res.status(200).json({
            message: "Авторизация успешна",
            token,
            user: {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                second_name: user.second_name,
                phone: user.phone,
                role: user.role,
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Ошибка авторизации",
            error: error.message,
        })
    }
}

const getMe = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: [
                "id",
                "email",
                "first_name",
                "second_name",
                "phone",
                "role",
                "createdAt",
                "updatedAt",
            ]
        })

        if(!user) {
            return res.status(500).json({
                message: "Пользователь не найден"
            })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            message: "Ошибка при получении пользователя",
            error: error.message,
        })
    }
}

export {
    register,
    login,
    getMe,
}