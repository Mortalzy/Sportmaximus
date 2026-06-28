const adminMiddleware = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(500).json({
                message: "Пользователь не авторизован"
            })
        }

        if (req.user.role !== "ADMIN") {
            return res.status(500).json({
                message: "Нет доступа. Требуются права администратора"
            })
        }

        next()
    } catch (error) {
        return res.status(500).json({
            message: "Ошибка прав администратора",
            error: error.message,
        })
    }
}

export default adminMiddleware