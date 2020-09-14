const Postcode = require('../models/Postcode');
const SingleAddress = require('../services/SingleAddress');
const MultipleAddress = require('../services/MultipleAddress');

class PostcodeController {
  async index(request, response) {
    const { code } = request.params;

    const [postCode, extPostCode] = code.split('-');

    const location = await Postcode.findAll({
      where: { num_cod_postal: postCode, ext_cod_postal: extPostCode },
    });

    // console.log(location);

    const values = Object.values(location);

    const filteredLocations = values.map(v => v.dataValues);
    // console.log(filteredLocations);

    if (filteredLocations.length === 1) {
      console.log('first case');
      const result = await SingleAddress.execute(filteredLocations);
      return response.json({ address: result, isSingle: true });
    }
    console.log('second case');

    const result = await MultipleAddress.execute(filteredLocations);
    return response.json({ address: result, isSingle: false });

    // single address = retorna o data_values
    // multiple address = retorna o array com data_values
  }
}

module.exports = new PostcodeController();
