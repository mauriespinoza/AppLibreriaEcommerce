import {Product} from '../models/Products.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar los productos'})
    }
}

export const getProductById = async(req, res) => {
    try {
        const {rut} = req.params
        const getProducts = await Product.findOne({id: id})
        res.status(200).json(getProducts)
    } catch (error) {
        res.status(404).json({message: 'No pudimos encontrar al productos'})
    }
}
export const createProduct = async (req, res) => { //createUser
    try {
        const {nombre, descripcion, imagen, cantidad, valor, familyproducts} = req.body

        if(!nombre || !descripcion || !cantidad || !valor || !familyproducts) {
            return res.status(400).json({ message: "Debes rellenar todos los campos"})
        }

        // const verifyProduct = await User.findOne({ rut: rut })
        // if(verifyProduct) {
        //     return res.status(500).json({ message: 'El rut ingresado ya tiene una cuenta' })
        // }


        const product = new Product({
            nombre,
            descripcion,
            imagen,
            cantidad,
            valor,
            familyproducts
        })
        const saveProduct = await product.save();
        res.status(201).json({message: `El usuario ${saveProduct.nombre} ha sido creado con éxito`})
    }catch(error){
        res.status(500).json({message: 'No pudimos crear el producto'})
    }
}
export const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id
        const updateData = req.body
        
        const updateUser = await Product.findOneAndUpdate({ id: productId }, updateData, { new: true } )
        if (!updateUser) {
           return res.status(404).json({ message: 'Producto no encontrado'})
        }
        
        res.status(202).json({message: `Producto ${updateProduct.nombre} ha sido actualizado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos actualizar el producto'})
    }
}

export const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id

        const removeProduct = await Product.findOneAndDelete({id: productId})
        if(!removeUser) {
            return res.status(404).json({ message: "Producto no encontrado para eliminar" })
        }

        res.status(202).json({message: `Producto ${removeProduct.nombre} ha sido eliminado con éxito`})
    } catch (error) {
        res.status(500).json({message: 'No pudimos eliminar el producto'})
    }
}