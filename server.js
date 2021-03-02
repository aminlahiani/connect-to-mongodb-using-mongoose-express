const express = require("express")
const connectDB = require("./config/db")

const UserRouter = require('./routes/user')

const app = express()

connectDB()

app.use(express.json())



app.use(UserRouter)

app.listen(8000 ,() => console.log("app listen port 8000"))