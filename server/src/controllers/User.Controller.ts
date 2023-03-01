import { Request, Response } from "express";
import { userUseCases } from "../useCases"
import { errorResponse } from "../utils";


// const createWordController = async (
//     req:Request<{}, {}, IWord>, 
//     res:Response
// ) => {
//     try {
//         const word = await wordUseCases.add(req.body)   
//         res.status(201).send(word)
//     } catch (error:any) {
//         res.status(500).send(errorResponse(error))
//     }
// }

// const getWordController = async (
//     req:Request,
//     res:Response
// ) => {
//     try {
//         const words = await wordUseCases.get(req.params.id)
//         res.status(200).send(words)
//     } catch (error) {
//         res.status(500).send(errorResponse(error))
//     }
// }

// const updateWordController = async (
//     req:Request<{}, {}, IWord>,
//     res:Response
// ) => {
//     try {
//         const word = await wordUseCases.update(req.body)   
//         res.status(200).send(word)
//     } catch (error) {
//         res.status(500).send(errorResponse(error))
//     }
// }

// const deleteWordController = async (
//     req:Request<{}, {}, IWord>,
//     res:Response
// ) => {
//     try {
//         const word = await wordUseCases.remove(req.body)   
//         res.status(202).send(word)
//     } catch (error) {
//         res.status(500).send(errorResponse(error))
//     }
// }

const loginUser = async (
    req: Request<{}, {}, { username: string, password: string }>,
    res: Response
) => {
    // Login is only handled by auth because of that there are no interations with the database so we do not need usecases
    try{
        // await login( req.body.username, req.body.password )
        res.status(200).send({message: "Logged in successfully"})
    } catch (error:any){
        if(error.code){
            res.status(error.code).send(errorResponse(error))
            return
        }
        res.status(500).send(errorResponse(error))
    }
}

export default {
    loginUser
    // createWordController,
    // getWordController,
    // updateWordController,
    // deleteWordController
}