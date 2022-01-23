// Multer é um recurso middleware que processa arquivos enviados pelos usuários, configurando nomes e destino.

import multer from 'multer';
import { extname, resolve } from 'path';                                                 // Gerencia caminhos e nomes de extensão de arquivos.

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);                       // Gera número aleatório entre 10k e 20k

export default {                                                                         // Os dados neste arquivo serão retornados como padrão.
  fileFilter: (req, file, cb) => {                                                       // Filtragem do tipo de arquivo.
    if (file.mimetype !== 'image/png' && file.mimetype !== 'img/jpg') {                  // Se o arquivo for diferente de JPG ou PNG...
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));               // Retorne um erro padrão pelo Multer.
    }

    return cb(null, true);                                                               // Há erros? Não, É JPG ou PNG? True.
  },
  storage: multer.diskStorage({                                                          // propriedade storage recebe método de armazenamento Multer.
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));                     // Salve-os na pasta imagens dentro de upload.
    },
    filename: (req, file, cb) => {                                                       // Configurando nome do arquivo.
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);             // Para que nenhum deles tenha o mesmo nome.
    },
  }),

};
