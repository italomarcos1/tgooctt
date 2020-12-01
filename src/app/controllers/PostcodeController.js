const Postcode = require('../models/Postcode');
const SingleAddress = require('../services/SingleAddress');
const MultipleAddress = require('../services/MultipleAddress');

class PostcodeController {
  async index(request, response) {
    const { code } = request.params;

    // divide o cep pelo traço. '2770-071' vira duas strings, '2770' e '071'
    const [postCode, extPostCode] = code.split('-');

    // se preencher alguma metade faltando, retorna erro. '2770-***' ou '****-071' dão erro
    if (!Number(postCode) || !Number(extPostCode)) {
      return response.status(400).json({ error: 'Invalid input' });
    }
    // query no banco de dados
    const location = await Postcode.findAll({
      where: { num_cod_postal: postCode, ext_cod_postal: extPostCode },
    });

    // retorna o valor de cada campo do objeto.
    // ---
    // se temos um objeto { postcode: 42, address:'casa'},
    // retorna '42' e 'casa'.
    //
    const values = Object.values(location);

    // retorna o campo 'dataValues' do objeto
    const filteredLocations = values.map(v => v.dataValues);

    // o banco pode retornar um endereço ou múltiplos endereços.

    // quando retorna apenas um endereço cai no campo abaixo
    if (filteredLocations.length === 1) {
      console.log('first case');
      const result = await SingleAddress.execute(filteredLocations);
      return response.json({ address: [result] });
    }
    console.log('second case');

    // quando retorna vários endereços, cai no campo abaixo

    const result = await MultipleAddress.execute(filteredLocations);
    return response.json({ address: result });

    // single address = retorna o data_values
    // multiple address = retorna o array com data_values
  }
}

module.exports = new PostcodeController();
