import { Category } from "../models/index.js";

const createCategory = async (req, res) => {
    try {
        const {
            name,
            description,
        } = req.body

        const candidate = await Category.findOne({
            where: {name},
        })

        if (candidate) {
            return res.status(500).json({
                message: "Категория с таким названием уже существует"
            })
        }

        const category = await Category.create({
            name,
            description,
        })

        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({message: "Ошибка при создании категории ", error})
    }
}

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll()
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).json({message: "Ошибка в получении категорий ", error})
    }
}

export {
    createCategory,
    getCategories,
}

