import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()

// import routes
app.use(cors())
import postsRoute from './routes/posts.js'
import userRoute from './routes/user.js'

const app = express()

// middlewaeres

app.use(bodyParser.json())
app.use('/posts', postsRoute)
app.use('/user', userRoute)

// routes
app.get('/', (req, res) => {
    res.send('We are on home')
})



// connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true})
    .then(() => {console.log('connected to db')})
    .catch((error)=> {console.log(error)})

// start the server
app.listen(3333, ()=> {
    console.log(`server running at prot 3333`)
})