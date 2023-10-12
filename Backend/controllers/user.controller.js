import {User} from '../models/User.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar los usuarios'})
    }
}

export const getUserByRut = async(req, res) => {
    try {
        const {rut} = req.params
        const getUser = await User.findOne({rut: rut})
        res.status(200).json(getUser)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar al usuario'})
    }
}

export const signUp = async (req, res) => { //createUser
    try {
        const {nombre, apellido, rut, edad, correo, password} = req.body

        if(!nombre || !apellido || !rut || !edad || !correo || !password) {
            return res.status(400).json({ message: "Debes rellenar todos los campos"})
        }

        const verifyUser = await User.findOne({ rut: rut })
        if(verifyUser) {
            return res.status(409).json({ message: 'El rut ingresado ya tiene una cuenta' })
        }

        const passwordEncrypt = await bcrypt.hash(password, 10)

        const user = new User({
            nombre,
            apellido,
            rut,
            edad,
            correo,
            password: passwordEncrypt
        })
        const saveUser = await user.save();

        //add token to new user
        const expireTime = Math.floor(new Date()/ 1000) + 3600
        const tokenUser = jwt.sign({
            exp: expireTime,
            data: {
                id: saveUser._id,
                correo: saveUser.correo,
                nombre: saveUser.nombre,
                apellido: saveUser.apellido,
                edad: saveUser.edad
            }
        }, process.env.SECRET_KEY);
        // res.status(201).json({message: 'User add success' });
        res.status(201).json({message: `El usuario ${saveUser.nombre} ${saveUser.apellido} ha sido creado con éxito, id: ${saveUser._id}`, token: tokenUser });
        
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'No pudimos crear el usuario'})
    }
}

export const login = async(req, res) => {
    try {
        const { correo, password } = req.body;

        const verifyUserByCorreo = await User.findOne({correo : correo})
        if(!verifyUserByCorreo) {
            return res.status(404).json({message: 'el correo de usuario no existe en nuestra base de datos'})
        }

        const verifyPassword = await bcrypt.compare(password, verifyUserByCorreo.password)
        if(!verifyPassword) {
            return res.status(403).json({message: 'Los datos ingresados no corresponden'})
        }

        const expireTime = Math.floor(new Date()/ 1000) + 3600

        const {_id, nombre, apellido, edad } = verifyUserByCorreo

        const token = jwt.sign({
            exp: expireTime,
            data: {
                id: _id,
                correo: correo,
                nombre: nombre,
                apellido: apellido,
                edad: edad
            }
        }, process.env.SECRET_KEY)

        res.json({token: token, userdata: verifyUserByCorreo})
    } catch (error) {
        res.status(403).json({message: 'No logramos verificar tu cuenta'})
    }
}

export const updateUser = async (req, res) => {
    try {
        const userRut = req.params.rut
        const updateData = req.body
        
        const updateUser = await User.findOneAndUpdate({ rut: userRut }, updateData, { new: true } )
        if (!updateUser) {
           return res.status(404).json({ message: 'Usuario no encontrado'})
        }
        
        res.status(202).json({message: `Usuario ${updateUser.nombre} ${updateUser.apellido} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos actualizar el usuario'})
    }
}

export const deleteUserByRut = async (req, res) => {
    try {
        const userRut = req.params.rut

        const removeUser = await User.findOneAndDelete({rut: userRut})
        if(!removeUser) {
            return res.status(404).json({ message: "Usuario no encontrado para eliminar" })
        }

        res.status(202).json({message: `Usuario ${removeUser.nombre} ${removeUser.apellido} ha sido eliminado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos eliminar el usuario'})
    }
}