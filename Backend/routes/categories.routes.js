import express from 'express'
const router = express.Router()

import { deleteCategoriesById, getAllCategories, getCategoriesById, updateCategories, createCategories} from '../controllers/categories.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

// router.get('/categories', authRequire, getAllCategories)
router.get('/categories', getAllCategories)

router.get('/categories/:id', authRequire, getCategoriesById)

router.post('/categories/', authRequire, createCategories)

router.put('/categories/:id', authRequire, updateCategories)

router.delete('/categories/:id', authRequire, deleteCategoriesById)

export default router