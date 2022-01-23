// Configurações de conexão com a base de dados, que serão acessadas pelo sequelize (Gerenciador)

require('dotenv').config();                                               // Gerenciador de dados sigilosos

module.exports = {
  dialect: 'mariadb',                                                     // Linguagem da base de dados? MariaDB
  host: process.env.DATABASE_HOST,                                        // Quem está hospedando a base de dados? Google Cloud
  port: process.env.DATABASE_PORT,                                        // No servidor mas em qual porta? 3306
  username: process.env.DATABASE_USERNAME,                                // Login do servidor: root
  password: process.env.DATABASE_PASSWORD,                                // Senha do servidor: xyz
  database: process.env.DATABASE,                                         // Nome da base de dados: escola
  define: {                                                               // Configurações de formatação da base de dados
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',

};
