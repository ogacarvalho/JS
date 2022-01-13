/*  Router




*/

import { Router } from 'express';                                                           // Acionando recurso Routes().
import  homeController  from '../controller/HomeController';                                // Minúsculo, pois a Class ja está instaciada, logo seu retorno já sera o objeto.

const router = new Router();

// homeController já instanciado, retorna objeto JSON.
router.get('/', homeController.index);

export default router;
