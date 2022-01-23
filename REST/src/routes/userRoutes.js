import { Router } from 'express';
import  userController  from '../controller/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);    // Falha de segurança.
// router.get('/:id', userController.show);  // Falha de segurança.

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
