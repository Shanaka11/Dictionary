import path from 'path'
import mongoose from 'mongoose'
import express from 'express'
import router from './routes'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173'
}))

// app.get('/', (req, res) => {
//     res.sendStatus(200)
// })

app.use('/api/v1', router)

// Serve Frontend
//if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', '../', 'client', 'dist', 'index.html')))
//}

app.listen( PORT , async () => {
    console.log(`Application is running on http://localhost:${PORT}`)

    const dbUri = process.env.DB_URI
    try {
        if(!dbUri) throw new Error()
        await mongoose.connect(dbUri)
        console.log('DB Connected')
    }catch (error) {
        console.log(error)
        console.log('Could not connect to DB')
        process.exit(1)
    }
})