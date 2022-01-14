/*  Token




*/

import { Router } from 'express';
import  tokenController  from '../controller/TokenController';

const router = new Router();



router.post('/', tokenController.store); // SUBMIT? -> No index '/' aciona o método -> Store do Controller de Tokens.
export default router;
