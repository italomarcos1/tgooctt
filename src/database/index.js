import Sequelize from 'sequelize';

import Postcode from '../app/models/Postcode';

import databaseConfig from '../config/database';

const models = [Postcode];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection)); // pega cada model e chama o init do sequelize passando a conexão. que tem a config do banco
  }
}

export default new Database();
