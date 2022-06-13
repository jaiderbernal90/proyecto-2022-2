import { NextFunction, Request, Response } from 'express'
import { check } from 'express-validator'
import { validateResult } from '../helpers/validateHelper'
import { User } from '../models/User';
import bcrypt from 'bcrypt'

export const validateLogin = [
    check('email')
        .isEmail().withMessage('Formato invalido de email')
        .custom( email => { return User.findOne({ where:{email} }).then(user => { if(!user) return Promise.reject('El email ingresado no esta asociado a una cuenta') }) }),
    check('password')
        .exists()
        .not()
        .isEmpty()
        .isLength({ min: 8 })
        .withMessage('El campo password es requerido')
        .custom((password, { req }) => {
        return User.findOne({ where: { email: req.body.email } })
            .then(u => bcrypt.compare(password, u!.password))
        }).withMessage('Contraseña incorrecta'),
    (req:Request,res:Response,next:NextFunction)=>{
        validateResult(req,res,next)
    }
];