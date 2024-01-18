import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';

dotenv.config()

mongoose.connect(process.env.VITE_MONGODB).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json()) //allows json as the input in backend

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

