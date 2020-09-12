const Postcode = require('../models/Postcode');

class PostcodeController {
  async index(request, response) {
    const { code } = request.params;

    const [postCode, extPostCode] = code.split('-');

    const { dataValues } = await Postcode.findOne({
      where: { num_cod_postal: postCode, ext_cod_postal: extPostCode },
    });

    delete dataValues.createdAt;
    delete dataValues.updatedAt;

    const addressObject = Object.entries(dataValues);

    const filteredAddressObject = addressObject.filter(f => f[1] !== null);

    const filteredAddress = Object.fromEntries(filteredAddressObject);

    const copyFinalAddress = filteredAddress;

    delete copyFinalAddress.id;
    delete copyFinalAddress.cod_distrito;
    delete copyFinalAddress.cod_concelho;
    delete copyFinalAddress.cod_localidade;
    delete copyFinalAddress.cod_arteria;
    delete copyFinalAddress.nome_localidade;
    delete copyFinalAddress.num_cod_postal;
    delete copyFinalAddress.ext_cod_postal;
    delete copyFinalAddress.desig_postal;

    const result = Object.values(copyFinalAddress).join(' ');

    console.log(result);

    // {{ url }}/2770-071
    // {{ url }}/3750-107
    // {{ url }}/3750-144

    console.log(filteredAddress);
    const {
      cod_distrito,
      cod_concelho,
      cod_localidade,
      cod_arteria,
      nome_localidade,
      num_cod_postal,
      ext_cod_postal,
      desig_postal,
    } = dataValues;

    return response.json({
      address: `${result}, ${nome_localidade} - ${desig_postal}`,
    });
  }
}

module.exports = new PostcodeController();
