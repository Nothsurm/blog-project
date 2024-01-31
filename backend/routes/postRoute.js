import express from 'express'
import { verifyToken } from '../middleware/verifyUser.js'
import { create, getPosts } from '../controller/post.controller.js'

const router = express.Router()

router.post('/create', verifyToken, create)
router.get('/getposts', getPosts)

export default router;