import {FamilyProduct} from '../models/FamilyProducts.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllFamilyProduct = async (req, res) => {
    try {
        const allFamilyProduct = await FamilyProduct.find();
        res.status(200).json(allFamilyProduct)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar los Familia'})
    }
}

export const getFamilyProductById = async(req, res) => {
    try {
        const {id} = req.params
        const getFamilyProduct = await FamilyProduct.findOne({id: id})
        res.status(200).json(getFamilyProduct)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar Familia'})
    }
}
export const createFamilyProduct = async (req, res) => { //createUser
    try {
        const {nombre, descripcion, imagen} = req.body

        if(!nombre || !descripcion) {
            return res.status(400).json({ message: "Debes rellenar todos los campos"})
        }

        // const verifyProduct = await User.findOne({ rut: rut })
        // if(verifyProduct) {
        //     return res.status(500).json({ message: 'El rut ingresado ya tiene una cuenta' })
        // }


        const familyProduct = new FamilyProduct({
            nombre,
            descripcion,
            imagen
        })
        const saveFamilyProduct = await familyProduct.save();
        res.status(201).json({message: `Familia ${saveFamilyProduct.nombre} ha sido creado con éxito`})
    }catch(error){
        res.status(500).json({message: 'No pudimos crear Familia'})
    }
}
export const updateFamilyProduct = async (req, res) => {
    try {
        const familyId = req.params.id
        const updateData = req.body
        
        const updateFamilyProduct = await FamilyProduct.findOneAndUpdate({ id: familyId }, updateData, { new: true } )
        if (!updateFamilyProduct) {
           return res.status(404).json({ message: 'Familia no encontrado'})
        }
        
        res.status(202).json({message: `Familia ${updateProduct.nombre} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos actualizar  Familia'})
    }
}

export const deleteFamilyProductById = async (req, res) => {
    try {
        const familyId = req.params.id

        const removeFamilyProduct = await FamilyProduct.findOneAndDelete({id: familyId})
        if(!removeFamilyProduct) {
            return res.status(404).json({ message: "Familia no encontrado para eliminar" })
        }

        res.status(202).json({message: `Familia ${removeFamilyProduct.nombre} ha sido eliminado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos eliminar el producto'})
    }
}