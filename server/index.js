import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import sequelize from './db.js'
import './models/index.js'

dotenv.config()

import productRoutes from './routes/productRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import authRoutes from './routes/authRoutes.js'

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

app.use('/api/product', productRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/auth', authRoutes)

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log("Подключено к БД")

        await sequelize.sync({alter: true})
        console.log("Таблицы синхронизированы");
        

        app.listen(PORT, () => {
        console.log(`Сервер запущен на http://localhost:${PORT}`);
        })
    }
    catch (error) {
        console.log('Ошибка запуска сервера: ', error);
    }
}

start();



