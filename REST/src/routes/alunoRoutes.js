// Gerenciador de rotas para Alunos

import { Router } from 'express';                                                       // Carrega Gerenciador de Rotas Express
import  alunoController  from '../controller/AlunoController';                          // Carrega Controlador de Rotas
import loginRequired from '../middlewares/loginRequired';                               // Carrega Middleware que exige Login

const router = new Router();                                                            // Acionando e instânciando o Gerenciador de Rotas Express ![Class]

router.get('/', alunoController.index);                                                 // Retorna lista de alunos cadastrados no banco de dados.
router.post('/', loginRequired, alunoController.store);                                 // Solicita criação de um novo aluno.
router.put('/:id', loginRequired, alunoController.update);                              // Solicita atualização de dados de aluno.
router.get('/:id', alunoController.show);                                               // Solicita display de aluno.
router.delete('/:id', loginRequired, alunoController.delete);                           // Solicita que delete o aluno. [exige ID e Login]

export default router;
