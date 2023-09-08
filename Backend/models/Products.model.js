import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: false},
    cantidad: {type: Number, required: true},
    valor: { type: Number, required: true},
    categories: { type: Schema.ObjectId, ref: "Categories" }
}, { versionKey: false})

export const Product = mongoose.model('products', productSchema)