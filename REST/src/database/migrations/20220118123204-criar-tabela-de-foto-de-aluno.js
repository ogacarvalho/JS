module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',                                                    // Este campo será filho de outra tabela [aluno]. via PK.
          key: 'id',
        },
        onDelete: 'SET NULL',                                               // Se modificar o registro pai, o registro filho ficará nulo.
        onUpdate: 'CASCADE',                                                // Se modificar o registro pai, o registro filho será modificado.
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('fotos');
  },
};
