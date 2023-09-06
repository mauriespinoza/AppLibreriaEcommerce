import express from 'express'
const router = express.Router()

import { deleteProductById, getAllProducts, getProductById, updateProduct} from '../controllers/product.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

router.get('/products', authRequire, getAllProducts)

router.get('/products/:id', authRequire, getProductById)

router.put('/products/:id', authRequire, updateProduct)

router.delete('/products/:id', authRequire, deleteProductById)

export default router

