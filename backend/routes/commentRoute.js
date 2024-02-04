import express from 'express'
import { createComment, getPostComments, likeComment, editComment } from '../controller/commentController.js'
import { verifyToken } from '../middleware/verifyUser.js'

const router = express.Router()

router.post('/create', verifyToken, createComment)
router.get('/getPostComments/:postId', getPostComments)
router.put('/likeComment/:commentId', verifyToken, likeComment)
router.put('/editComment/:commentId', verifyToken, editComment)

export default router;