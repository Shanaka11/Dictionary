import express from 'express'
import { userControllers } from '../controllers'

const router = express.Router()

router.post('/login', userControllers.loginUser)

export default router