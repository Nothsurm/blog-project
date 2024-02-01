import express from 'express'
import { verifyToken } from '../middleware/verifyUser.js'
import { create, getPosts, deletePost } from '../controller/post.controller.js'

const router = express.Router()

router.post('/create', verifyToken, create)
router.get('/getposts', getPosts)
router.delete('/deletepost/:postId/:userId', verifyToken, deletePost)

export default router;