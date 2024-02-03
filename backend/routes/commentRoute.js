import express from 'express'
import { createComment, getPostComments } from '../controller/commentController.js'
import { verifyToken } from '../middleware/verifyUser.js'

const router = express.Router()

router.post('/create', verifyToken, createComment)
router.get('/getPostComments/:postId', getPostComments)

export default router;