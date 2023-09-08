import express from 'express'
const router = express.Router()

import { deleteFamilyProductById, getAllFamilyProduct, getFamilyProductById, updateFamilyProduct, createFamilyProduct} from '../controllers/familyproduct.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

router.get('/family', authRequire, getAllFamilyProduct)

router.get('/family/:id', authRequire, getFamilyProductById)

router.post('/family/', authRequire, createFamilyProduct)

router.put('/family/:id', authRequire, updateFamilyProduct)

router.delete('/family/:id', authRequire, deleteFamilyProductById)

export default router