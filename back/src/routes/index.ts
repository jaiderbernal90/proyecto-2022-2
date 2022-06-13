import { Router} from 'express'
import { validateCreate } from '../rules/user.rules'
import * as userController from '../controllers/userController';
import * as authController from '../controllers/authController';
import { validateLogin } from '../rules/login.rules';
import { tokenGuard } from '../middleware/auth';

const router = Router()

// LOGIN 
router.post("/login", validateLogin, authController.login);
router.post("/register", validateCreate, userController.create);

// USER
router.get("/user", tokenGuard() ,userController.getAll);
router.get("/user/:idUser", tokenGuard() ,userController.get);
router.post("/user/create", validateCreate, userController.create);
router.put("/user/:idUser", tokenGuard() ,validateCreate, userController.update);
router.delete("/user/:idUser", tokenGuard() ,userController.destroy);



export default router