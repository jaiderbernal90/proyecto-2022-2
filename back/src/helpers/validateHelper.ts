import { NextFunction, Request, Response } from 'express'
import {validationResult} from 'express-validator'


/**
 * If the validation result is valid, then call the next function, otherwise send a 403 response with
 * the errors.
 * @param {Request} req - The request object
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function is a function in the Express router which, when
 * invoked, executes the middleware succeeding the current middleware.
 * @returns The validationResult function returns an object with a throw method.
 */
export const validateResult = (req:Request,res:Response,next:NextFunction) => {
    try {
        validationResult(req).throw()
        return next()
    } catch (error:any) {
        res.status(403)
        res.send({errors: error.array()})
    }
}