import express, { json } from 'express'
import dotenv from 'dotenv'
import sequelize from './db.js'
dotenv.config()

const app = express()
app.use(express.json())


const PORT = process.env.PORT || 5000;

app.get('/user', (req, res) => {
    res.json({id: 1, name: 'Maxim'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        console.log("Подключено к БД")

        app.listen(PORT, () => {
        console.log(`Сервер запущен на http://localhost:${PORT}`);
        })
    }
    catch (error) {
        console.log('Ошибка запуска сервера: ', error);
    }
}

start();



