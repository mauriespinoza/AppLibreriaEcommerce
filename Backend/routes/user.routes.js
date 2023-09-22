import express from 'express'
const router = express.Router()

import { deleteUserByRut, getAllUsers, getUserByRut, login, signUp, updateUser} from '../controllers/user.controller.js'
import { authRequire } from '../middlewares/auth.middleware.js'

//router.get('/users', authRequire, getAllUsers)
router.get('/users', getAllUsers)

router.get('/users/:rut', authRequire, getUserByRut)

router.post('/users', signUp)

router.post('/login', login)

router.put('/users/:rut', authRequire, updateUser)

router.delete('/users/:rut', authRequire, deleteUserByRut)

export default router

