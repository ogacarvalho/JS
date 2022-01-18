import { Router } from 'express';
import  fotoController  from '../controller/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoController.store); // ...single('qual o nome do campo que vai receber o arq?') !ta no insomnia.

export default router;
