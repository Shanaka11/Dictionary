
import express from "express"
import wordRouter from "./word.router"
// import userRouter from "./user.router"
import { validateToken } from "../auth"

const router = express.Router()

router.use('/word', wordRouter)
// router.use('/user', userRouter)

export default router