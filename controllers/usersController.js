const express = require('express')
const controller = express.Router()
let users = require('../data/simulated_database')

controller.param("id", (req, res, next, id) => {
    req.user = users.find(user => user.id == id)
    next()
})




// POST - CREATE - SKAPA EN ANVÄNDARE  http://localhost:5000/api/users /*skapar användare */
controller.route('/')
.post((htppRequest, httpRespons) => {
    let user = {
        id: (users[users.length -1])?.id > 0 ? (users[users.length -1])?.id + 1 : 1,
        firstName: httpRequest.body.firstName, 
        lastName: httpRequest.body.lastName,
        email: httpRequest.body.email,
        password: httpRequest.body.password
    }
    users.push(users)
    httpRespons.status(201).json(user)
})
.get((httpRequest, httpRespons) => {
    httpRespons.status(200).json(users)

})

// POST - CREATE - SKAPA EN ANVÄNDARE  http://localhost:5000/api/users/1 /*skapar användare */
controller.route("/:id")
.get((htppRequest, httpRespons) => {
    if (httpRequest.user != undefined)
    httpRespons.status(200).json(httpRequest.user)
    else
    httpRespons.status(404).json()

})
.put((httpRequest, httpRespons) => { /*uppdatera användare*/
if (httpRequest.user != undefined){
    users.forEach(user => {
        if (user.id == httpRequest.user.id) {
            user.firstName = htppRequest.body.firstName ? httpRequest.body.firstName : user.firstName
            user.lastName = htppRequest.body.lastName ? httpRequest.body.lastName : user.lastName
            user.email = htppRequest.body.email ? httpRequest.body.email : user.email
        }
    })
    httpRespons.status(200).json(httpRequest.user)
}
    
    else
    httpRespons.status(404).json()

})
.delete((httpRequest, httpRespons) => {
    if (httpRequest.user != undefined){
        users = users.filter(user => user.id !== httpRequest.user.id)
        httpRespons.status(204).json
    }
    else
    httpRespons.status(404).json()

})



 


module.exports = controller