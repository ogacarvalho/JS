import { Router } from 'express';
import  fotoController  from '../controller/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store);

export default router;
