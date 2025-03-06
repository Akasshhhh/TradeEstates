import express from "express"
import { deleteUser, getUser, getUsers, updateUser, savePost, profilePosts, getNotificationNumber } from "../controllers/user.controller.js"
import {verifyToken} from "../middleware/verifyToken.js"

const router = express.Router()

// The order of routes in Express is important, as it checks them sequentially.
router.get('/', getUsers)
// router.get('/:id', verifyToken, getUser)

router.put('/:id', verifyToken, updateUser)

router.delete('/:id', verifyToken, deleteUser)

router.post('/save', verifyToken, savePost)

router.get('/profilePosts', verifyToken, profilePosts)

router.get('/notification', verifyToken, getNotificationNumber)
export default router