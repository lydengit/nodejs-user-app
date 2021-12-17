import express from 'express'
import { allUsers, addUser, deleteUser } from '../controllers/userController.js'


const userRoutes = express.Router()

userRoutes.get('/all-users', allUsers)

userRoutes.post('/add-user', addUser)

userRoutes.delete('/delete/:id', deleteUser)

export { userRoutes }