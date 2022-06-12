import { Router} from 'express'
import { validateCreate } from '../rules/user.rules'
import * as userController from '../controllers/userController';
import * as authController from '../controllers/authController';
import { validateLogin } from '../rules/login.rules';

const router = Router()

// USER
router.get("/user", userController.getAll);
router.get("/user/:idUser", userController.get);
router.post("/user/create", validateCreate, userController.create);
router.put("/user/:idUser", validateCreate, userController.update);
router.delete("/user/:idUser", userController.destroy);

// LOGIN 
router.post("/login", validateLogin, authController.login);


export default router