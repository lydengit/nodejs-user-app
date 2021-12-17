'use strict'

const deleteUserBtns = document.querySelectorAll('.delete-user')
const arrDeleteUserBtns = [...deleteUserBtns]
for (let i = 0; i < arrDeleteUserBtns.length; i++) {
    arrDeleteUserBtns[i].onclick = (e) => {
        const id = `/users/delete/${e.target.dataset.id}`
        fetch(id, { method: 'DELETE' })
            .then(res => (res.json()))
            .then(data => location.href = data.redirect)
            .catch(err => console.log(err.message))
    }
}

//: search users
let search = document.querySelector('.search-user')
search ? search.onkeyup = (e) => {
    let val = e.target.value.toLowerCase()
    const listUsers = document.querySelectorAll('.list-users li')
    const arrUser = [...listUsers]
    for (let i = 0; i < arrUser.length; i++) {
        if (arrUser[i].innerText.toLowerCase().indexOf(val) > -1) {
            listUsers[i].style.display = 'block'
        } else {
            listUsers[i].style.display = 'none'
        }
    }
} : ''