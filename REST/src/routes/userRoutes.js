/*  Router

Nomes normalmente utilizados

• index          >  lista todos os usuários.   > GET
• store | create >  cria um novo usuário.      > POST
• delete         >  apaga um usuário.          > DELETE
• show           >  mostra um usuário.         > GET
• update         >  atualiza um usuário.       > PATCH | PUT




! Em cada controller podemos ter até 5 métodos. (Convenção)
! Após configurar a rota, lembre-se de carrega-la no app.js.
*/

import { Router } from 'express';                                                           // Acionando recurso Routes().
import  userController  from '../controller/UserController';                                // Minúsculo, pois a Class ja está instaciada, logo seu retorno já sera o objeto.
import loginRequired from '../middlewares/loginRequired';

const router = new Router();                                                                // 'router' está recebendo as req. de app.js


// router.get('/', userController.index);    // Falha de segurança.
// router.get('/:id', userController.show);  // Falha de segurança.

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
