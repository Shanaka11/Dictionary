import crudWordController from "./crudWord.controller";
import UserController from "./User.Controller";

const wordControllers = {
    ...crudWordController
}

const userControllers = {
    ...UserController
}

export {
    wordControllers,
    userControllers
}