import express from 'express'
import mongoose from 'mongoose'

const app = express()
const mongo = mongoose
const PORT = process.env.PORT || 5000

mongo.connect("mongodb://localhost:27017")

app.get("/",(req, res)=>{
    res.send({msg: "hello"})
})

app.get("/notes",(req, res)=>{
    res.send("Hello World")
})

app.post("/notes/create", (req,res)=>{
    res.send("Your note was created")
})

app.get("/notes/:id",(req, res)=>{
    const {id} = req.params
})

app.put("/notes/:id",(req, res)=>{
    res.send("Hello World")
})


app.listen(PORT,()=>{
    console.log(`Listening on http://localhost:${PORT}/`)
})