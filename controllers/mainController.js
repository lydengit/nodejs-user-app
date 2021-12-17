const index = (req, res) => res.redirect('/users/all-users')
const about = (req, res) => res.render('about', { title: 'About' })

export { index, about }