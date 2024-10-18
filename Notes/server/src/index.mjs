import express from 'express'
import cors from 'cors'
import connectToDB from '../db/db.js'
import dotenv from 'dotenv';
import authRouter from '../routes/auth.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT

// * Middleware
app.use(cors())
app.use(express.json())
app.use("/api/auth", authRouter)
// --- End of Middleware

app.listen(PORT,()=>{
    connectToDB()
    console.log(`Listening on http://localhost:${PORT}/`)
})