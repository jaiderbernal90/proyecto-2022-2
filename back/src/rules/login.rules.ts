import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'

export const validateLogin = [
    check('email')
        .exists()
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Formato invalido de email'),
    check('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('El campo password es requerido'),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
];