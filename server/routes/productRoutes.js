import {Router} from 'express'

import {
    createProduct,
    getProducts,
    getProductById,
    deleteProduct,
} from '../controllers/productController.js'

import authMiddleware from '../middlewares/authMiddleware.js'
import adminMiddleware from '../middlewares/adminMiddleware.js'

const router = Router()

// Что могут все
router.get('/', getProducts)
router.get('/:id', getProductById)

// Что может только ADMIN
router.post('/', authMiddleware, adminMiddleware, createProduct)
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct)


export default router