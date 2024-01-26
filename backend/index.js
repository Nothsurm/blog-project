import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config()

mongoose.connect(process.env.VITE_MONGODB).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json()) //allows json as the input in backend
app.use(cookieParser())

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

