import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../middleware/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }
    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })
    try {
        await newUser.save();
        res.json('Signup successfull')
    } catch (error) {
        next(error);
    }
}

export const signin = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    try {
        const validUser = await User.findOne({email})
        if (!validUser) {
            return next(errorHandler(404, 'User not found'))
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password)
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'))
        }
        const token = jwt.sign({
            id: validUser._id
        }, process.env.VITE_JWT_TOKEN)

        const { password: pass, ...rest} = validUser._doc //seperates the password from the rest of the json data

        res.status(200).cookie('jwt', token, {
            httpOnly: true
        }).json(rest)
    } catch (error) {
        next(error)
    }
}

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body
    try {
        const user = await User.findOne({email})
        if (user) {
            const token = jwt.sign({id: user._id}, process.env.VITE_JWT_TOKEN)
            const {password, ...rest} = user._doc //seperates password for security purposes
            res.status(200).cookie('jwt', token, {
                httpOnly: true,
            }).json(rest)
        } else {
            //creates temporary random password for new google sign in user
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10)
            const newUser = new User({
                //Change Michael Rushton to e.g. michaelrushton2351135 to make it unique for our model
                username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl
            });
            await newUser.save() //saves to database
            const token = jwt.sign({id: user._id}, process.env.VITE_JWT_TOKEN)
            const {password, ...rest} = user._doc //seperates password for security purposes
            res.status(200).cookie('jwt', token, {
                httpOnly: true,
            }).json(rest)
        }
    } catch (error) {
        next(error)
    }
}