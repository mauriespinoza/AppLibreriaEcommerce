import mongoose from 'mongoose'
//const uri ='mongodb://127.0.0.1:27017/UsersDB';
const uri ='mongodb+srv://admin:admin123@cluster0.5uwbwce.mongodb.net/UsersDB';
//mongodb+srv://admin:admin123@cluster0.5uwbwce.mongodb.net/
export const db = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopoLogy: true
        })
        console.log('Connected to MongoDB!')
    } catch (error) {
        console.error('Error connecting to MongoDB :c', error)
    }
}

