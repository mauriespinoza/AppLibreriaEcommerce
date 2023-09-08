import mongoose from 'mongoose'
const Schema = mongoose.Schema

const categoriesSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    img: {type: String, required: false}
}, { versionKey: false})

export const Categories = mongoose.model('categories', categoriesSchema)