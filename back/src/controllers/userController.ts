import { User } from '../models/User'
import { UserInput, UserModel, UserOuput} from '../interfaces/User.interface'
import { NextFunction, Request, Response} from 'express'
import bcrypt from 'bcrypt'


/**
 * This function will return all the users in the database.
 * @returns An array of UserModel objects.
 */
export const getAll = async (_req: Request, res: Response): Promise<Response> => {
    const allUser: UserModel[] = await User.findAll();
    return res.status(200).json(allUser);
}

/**
 * This function will find a user by its id and return it as a json response.
 * @returns A user object.
 */
export const get = async (req: Request, res: Response): Promise<Response> => {
    const user = await User.findByPk(req.params.idUser);
    return res.status(200).json(user);
}

/**
 * It takes a password from the request body, hashes it, and then creates a new user with the hashed
 * password.
 * @returns The user is being returned.
 */
export const create = async (req: Request, res: Response): Promise<Response> => {
    const { password } = req.body,
    hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));

    try {
        await User.create({ ...req.body, password: hash})
        return res.status(200).json({success: true,mensaje : 'Usuario Creado Correctamente'});
    } catch (error:any) {
        console.log(error);
        return res.json({success: false, mensaje: error.array()});
    }

}

/**
 * It updates the user's data in the database.
 * @returns The user object
 */
export const update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        let user = await User.findByPk(req.params.idUser);

        user?.update({
            ...req.body
        })
            
        user?.save();

        return res.status(200).json({success: true, user});
    } catch (error:any) {
        console.log(error);
        return res.json({success: false, mensaje: error.array()});
    }

}

/**
 * It finds a user by its primary key, and if it exists, it destroys it.
 * @returns The user is being returned.
 */
export const destroy = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        let user = await User.findByPk(req.params.idUser); 
            
        if(user) user.destroy()

        return res.status(200).json({mensaje : 'El user se ha eliminado', user: user});
    } catch (error:any) {
        console.log(error);
        return res.json({success: false, mensaje: error.array()});
        next();
    }
}


