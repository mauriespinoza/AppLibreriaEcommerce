import express from 'express'
const router = express.Router()

import { deleteProductById, getAllProducts, getProductById, getProductByCategory, updateProduct, createProduct} from '../controllers/product.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

// router.get('/products', authRequire, getAllProducts)
router.get('/products', getAllProducts)

router.get('/products/:id', getProductById)

router.get('/products/:categorie', getProductByCategory)

router.post('/products', authRequire, createProduct)

router.put('/products/:id', authRequire, updateProduct)

router.delete('/products/:id', authRequire, deleteProductById)

export default router

