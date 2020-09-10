import Sequelize, { Model } from 'sequelize';

class Postcode extends Model {
  static init(sequelize) {
    super.init(
      {
        cod_distrito: Sequelize.INTEGER,
        cod_concelho: Sequelize.INTEGER,
        cod_localidade: Sequelize.INTEGER,
        nome_localidade: Sequelize.STRING,
        cod_arteria: Sequelize.INTEGER,
        tipo_arteria: Sequelize.STRING,
        prep1: Sequelize.STRING,
        titulo_arteria: Sequelize.STRING,
        prep2: Sequelize.STRING,
        nome_arteria: Sequelize.STRING,
        local_arteria: Sequelize.STRING,
        troco: Sequelize.STRING,
        porta: Sequelize.STRING,
        cliente: Sequelize.STRING,
        num_cod_postal: Sequelize.INTEGER,
        ext_cod_postal: Sequelize.INTEGER,
        desig_postal: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Postcode;
