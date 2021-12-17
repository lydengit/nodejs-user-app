import express from 'express'
import { href } from './config/config.js'
import { connectDB } from './models/db.js'
import { userRoutes } from './routes/userRoutes.js'
import { mainRoutes } from './routes/main.js'

const app = express()
app.use(express.static('./src/images'))
app.use(express.static('./src/styles'))
app.use(express.static('./src/script'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

connectDB.then(res => app.listen(href.port, href.hostname)).catch(err => console.log(err.message))

app.use(mainRoutes)
app.use('/users', userRoutes)
app.use((req, res) => res.status(404).render('404', { title: '404' }))



