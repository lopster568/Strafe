import express from 'express'
import mongoose from 'mongoose'
import userRoutes from './routes/user.js'
import cors from 'cors'
const app = express()

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
const URL = "mongodb+srv://admin:admin@strafedb.atmisnl.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err){
        console.log(err)
    }
    app.listen("8000", (req, res) => { 
        console.log("Database Connected & Started")
    })
})
app.use("/api/user", userRoutes)