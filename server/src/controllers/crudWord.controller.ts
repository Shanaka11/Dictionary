import { Response } from "express";
import { IWord } from "../entities";
import { wordUseCases } from "../useCases"
import { errorResponse } from "../utils";
import { Request } from '../auth'


const createWordController = async (
    req:Request<{}, {}, IWord>, 
    res:Response
) => {
    try {
        const word = await wordUseCases.add(req.body, req.userId)   
        res.status(201).send(word)
    } catch (error:any) {
        res.status(500).send(errorResponse(error))
    }
}

const getWordController = async (
    req:Request,
    res:Response
) => {
    try {
        const words = await wordUseCases.get(req.params.id)
        res.status(200).send(words)
    } catch (error) {
        res.status(500).send(errorResponse(error))
    }
}

const updateWordController = async (
    req:Request<{}, {}, IWord>,
    res:Response
) => {
    try {
        const word = await wordUseCases.update(req.body, req.userId)   
        res.status(200).send(word)
    } catch (error) {
        res.status(500).send(errorResponse(error))
    }
}

const deleteWordController = async (
    req:Request<{}, {}, IWord>,
    res:Response
) => {
    try {
        const word = await wordUseCases.remove(req.body, req.userId)   
        res.status(202).send(word)
    } catch (error) {
        res.status(500).send(errorResponse(error))
    }
}

export default {
    createWordController,
    getWordController,
    updateWordController,
    deleteWordController
}