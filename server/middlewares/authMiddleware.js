import jwt from "jsonwebtoken"

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(500).json({
                message: "Пользователь не авторизован"
            })
        }

        const token = authHeader.split(" ")[1]

        if(!token) {
            return res.status(500).json({
                message: "Токен не найден"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = decoded

        next()

    } catch (error) {
        return res.status(500).json({
            message: "Некорректный токен",
            error: error.message,
        })
    }
}

export default authMiddleware