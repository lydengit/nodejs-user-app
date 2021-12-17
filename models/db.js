import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
}, { timestamps: true })

const User = mongoose.model('User', Schema)
const dbURI = 'mongodb+srv://Users:users123@cluster0.yte2z.mongodb.net/Users?retryWrites=true&w=majority'
const connectDB = mongoose.connect(dbURI)

export { connectDB, User }