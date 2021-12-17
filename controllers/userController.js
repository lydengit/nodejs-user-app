import { User } from '../models/db.js'

const allUsers = (req, res) => {
    User.find()
        .then(users => res.render('index', { title: 'Home', users }))
        .catch(err => console.log(err.message))
}

const addUser = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then(() => res.redirect('/'))
        .catch(err => console.log(err.message))
}


const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => (res.json({ redirect: '/' })))
        .catch(err => console.log(err.message))
}



export { allUsers, addUser, deleteUser }