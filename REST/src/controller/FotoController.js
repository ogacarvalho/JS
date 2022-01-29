import multer from 'multer';                                                                // Carregando recurso que configura uploads.
import multerConfig from '../config/multerConfig';                                          // Carregando o arquivo de configuração do Multer

import Foto from '../models/Foto';                                                          // Carregando Model de Fotos

const upload = multer(multerConfig).single('foto');                                         // !Esse arquivo pode ser usado como mw para qualquer rota que recebe fotos.

class FotoController {                                                                      // Classe Controladora das req. de uploads de fotos.
  store(req, res) {                                                                         // Método Store [Criação]
    return upload(req, res, async (err) => {                                                // Se houver erro, gere um erro padrão.
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;                                        // Não há erro, extraia o nome original e o nome do arquivo.
        const { aluno_id } = req.body;                                                      // Extraia o ID do aluno.
        const foto = await Foto.create({ originalname, filename, aluno_id });               // Aciona o método Create no Model de fotos.

        return res.json(foto);                                                              // Retorna um json, com a identificação e o link para a foto.
      } catch (e) {
        return res.status(400).json({                                                       // Se o erro for aqui, então o aluno não existe.
          errors: ['Aluno não existe!'],
        });
      }
    });
  }
}

export default new FotoController();
