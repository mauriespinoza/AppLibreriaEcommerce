import express from 'express';
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js'
import familyproductRouter from './routes/familyproduct.routes.js'
import categoriesRouter from './routes/categories.routes.js'
import { db } from './config/db.config.js'

import dotenv from 'dotenv'
dotenv.config()


const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//Middlewares de rutas
app.use('/api/v1', userRouter)
app.use('/api/v1', productRouter)
app.use('/api/v1', familyproductRouter)
app.use('/api/v1', categoriesRouter)
db()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})