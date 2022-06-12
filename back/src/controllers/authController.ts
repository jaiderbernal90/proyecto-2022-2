import { NextFunction, Request, Response} from 'express'
import { User } from '../models/User'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const _jwtSecret = '0.rfyj3n9nzh'

export const login = async (req: Request, res: Response): Promise<Response> => {
    const { email,password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if(!user) return res.status(401).json({mensaje : 'Ese usuario no existe'});
    if(!bcrypt.compareSync(password, user.password )) return res.status(401).json({ mensaje : 'Password Incorrecto'});

    const { id } = user!;

    return res.status(200).json({ token: jwt.sign({ id, email }, _jwtSecret, { expiresIn : '48h'})})
}
