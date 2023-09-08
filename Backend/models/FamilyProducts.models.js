import mongoose from 'mongoose'
const Schema = mongoose.Schema

const familyproductSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: false}
}, { versionKey: false})

export const FamilyProduct = mongoose.model('familyproducts', familyproductSchema)