import express from 'express'
import { wordControllers } from '../controllers'

const router = express.Router()

router.route('/')
.get(wordControllers.getWordController)
.post(wordControllers.createWordController)
.put(wordControllers.updateWordController)
.delete(wordControllers.deleteWordController)


router.route('/:id')
.get(wordControllers.getWordController)

// const routes = router.use("/word", router)
export default router