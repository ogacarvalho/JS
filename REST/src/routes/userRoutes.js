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

const router = new Router();                                                                // 'router' está recebendo as req. de app.js

// userController já instanciado, retorna objeto JSON.
router.post('/', userController.store);
// !A primeira rota, tipo "Index" nesse caso "users" não precisa ser especificada aqui, pois ela será especificada no app.js.
// No entanto, as futuras rotas, além de "users" devem ser específicadas aqui, ex: '/store/'

router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;
