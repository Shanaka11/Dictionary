import { Request } from 'express'
import * as core from 'express-serve-static-core';

interface AuthRequest<        
    P = core.ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = core.Query,
    Locals extends Record<string, any> = Record<string, any>> extends Request {
    userId?: string 
}

export default AuthRequest