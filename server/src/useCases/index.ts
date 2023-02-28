import wordUseCase from './crudWord.useCase'
import userUseCase from './User.useCase'

const wordUseCases = {
    ...wordUseCase
}

const userUseCases = {
    ...userUseCase
}

export {
    wordUseCases,
    userUseCases
}