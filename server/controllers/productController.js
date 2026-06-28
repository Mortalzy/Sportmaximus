import {Product, Category} from "../models/index.js"

const createProduct = async (req, res) => {
    try {
        const {
            category_id,
            name,
            description,
            price,
        } = req.body

        const product = await Product.create({
            category_id,
            name,
            description,
            price,
        })

        res.status(201).json(product)
    } catch(error) {
        res.status(500).json({message: 'Ошибка при создании товара ', error})
    }
}

const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category'
                }
            ]
        })

        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: 'Ошибка при получении товаров ', error})
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params

        const product = await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    as: 'category'
                }
            ]
        })

        if(!product) {
            return res.status(500).json({message: "Товар не найден"})
        }

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: "Ошибка при получении товара", error })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params

        const product = await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    as: 'category'
                }
            ]
        })

        if(!product) {
            return res.status(500).json({message: "Товар не найден"})
        }

        await product.destroy()

        res.status(200).json({
            message: "Товар полностью удален из базы данных"
        })

    } catch (error) {
        res.status(500).json({message: "Ошибка удаления товара", error})
    }
    
}

export {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
}