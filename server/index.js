const express = require("express")
const cors = require('cors')
const app = express()
const port = 5500

app.use(cors())

app.get('/date', (req, res)=>{
    const date = new Date()
    res.json({
        date:  date.toLocaleDateString()
    })
})

app.get('/time', (req, res)=>{
    const date = new Date()
    // get local time 
    res.json({
        time: date.toLocaleTimeString()
    })
})

let count = 0
let  usersData = [
    {
        "id": 1,
        "name": "John",
        "age": 30,
        "username": "John Cena",
        "password": "12345"
    },
    {
        "id": 2,
        "name": "Jane",
        "age": 43,
        "username": "Jane Doe",
        "password":  "67890"
    },
    {
        "id": 3,
        "name": "Bob",
        "age": 56,
        "username": "Bob  Smith",
        "password": "11111"
    }
]
app.get('/datetime', (req, res)=>{
    const date = new Date()
    // get local time 
    let dateTime = {
        time: date.toLocaleTimeString(),
        date: date.toLocaleDateString()
    }
    res.json(dateTime)
    console.log("Data Fetch:",count++)
})

app.get("/users", (req, res)=>{
    res.json(usersData)
})

app.get("/users/:id", (req, res)=>{
    const id = req.params.id
    let foundUser = usersData.find(user=>user.id == id)
    res.json(foundUser)
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})