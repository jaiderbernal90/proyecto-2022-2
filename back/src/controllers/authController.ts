import { NextFunction, Request, Response} from 'express'
import { User } from '../models/User'
import * as jwt from 'jsonwebtoken'


const _jwtSecret = '0.rfyj3n9nzh'
let _user;

export const user = () => {
    return _user;
}

/**
 * @returns The token is being returned.
 */

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    
    const { id } = user!;

    return res.status(200).json({ token: jwt.sign({ id, email }, _jwtSecret, { expiresIn : '48h'}) })
}


 
/**
 * VerifyToken is a function that takes a token as a string and returns a promise that resolves to a
 * boolean.
 * @param {string} token - the token to verify
 * @returns A promise that resolves to a boolean.
 */
export const verifyToken  = async (token:string) => {

    return new Promise((resolve, reject) => {
        jwt.verify(token, _jwtSecret, (err, decoded:any) => {
            if (err) {
                resolve(false)
                return
            }

            _user = User.findByPk(decoded['id'])
            resolve(true)
            return
        })
    }) as Promise<boolean>
}