
import express from "express"
import wordRouter from "./word.router"

const router = express.Router()

router.use('/word', wordRouter)

export default router