import {Categories} from '../models/Categories.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Categories.find();
        res.status(200).json(allCategories)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar las Categories'})
    }
}

export const getCategoriesById = async(req, res) => {
    try {
        const {id} = req.params
        const getCategories = await Categories.findOne({_id: id})
        res.status(200).json(getCategories)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar Categories'})
    }
}
export const createCategories = async (req, res) => { //createUser
    try {
        const {name, description, img} = req.body

        if(!name || !description||img) {
            return res.status(400).json({ message: "Debes rellenar todos los campos"})
        }

        // const verifyProduct = await User.findOne({ rut: rut })
        // if(verifyProduct) {
        //     return res.status(500).json({ message: 'El rut ingresado ya tiene una cuenta' })
        // }


        const categories = new Categories({
            name,
            description,
            img
        })
        const saveCategories = await categories.save();
        res.status(201).json({message: `Categories ${saveCategories.name} ha sido creado con éxito`})
    }catch(error){
        res.status(500).json({message: 'No pudimos crear Categories'})
    }
}
export const updateCategories = async (req, res) => {
    try {
        const categoriesId = req.params.id
        const updateData = req.body
        
        const updateCategories = await Categories.findOneAndUpdate({ _id: categoriesId }, updateData, { new: true } )
        if (!updateCategories) {
           return res.status(404).json({ message: 'Categories no encontrado'})
        }
        
        res.status(202).json({message: `Categories ${updateCategories.nombre} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos actualizar  Categories'})
    }
}

export const deleteCategoriesById = async (req, res) => {
    try {
        const categoriesId = req.params.id

        const removeCategories = await Categories.findOneAndDelete({_id: categoriesId})
        if(!removeCategories) {
            return res.status(404).json({ message: "Categories no encontrado para eliminar" })
        }

        res.status(202).json({message: `Categories ${removeCategories.name} ha sido eliminado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos eliminar el Categories'})
    }
}