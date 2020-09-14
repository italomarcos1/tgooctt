class SingleAddress {
  async execute(data) {
    const userData = data[0];

    delete userData.createdAt;
    delete userData.updatedAt;

    const a = Object.entries(userData);

    const filteredAddressObject = a.filter(f => f[1] !== null);

    // console.log(filteredAddressObject[0]);

    const filteredAddress = Object.fromEntries(filteredAddressObject);

    console.log(filteredAddress);

    const copyFinalAddress = { ...filteredAddress };

    delete copyFinalAddress.id;
    delete copyFinalAddress.cod_distrito;
    delete copyFinalAddress.cod_concelho;
    delete copyFinalAddress.cod_localidade;
    delete copyFinalAddress.cod_arteria;
    delete copyFinalAddress.nome_localidade;
    delete copyFinalAddress.num_cod_postal;
    delete copyFinalAddress.ext_cod_postal;
    delete copyFinalAddress.desig_postal;
    delete copyFinalAddress.cliente;

    const result = Object.values(copyFinalAddress).join(' ');

    // {{ url }}/2770-071
    // {{ url }}/3750-107
    // {{ url }}/3750-144

    const {
      id,
      cliente,
      cod_distrito,
      cod_concelho,
      cod_localidade,
      cod_arteria,
      nome_localidade,
      desig_postal,
    } = userData;

    let fullAddress = `${result}, ${nome_localidade} - ${desig_postal}`; // eslint-disable-line
    if (cliente) {
      fullAddress = `${cliente} - ${fullAddress}`;
    }

    const finalAddress = {
      id,
      full_address: fullAddress,
      cod_distrito,
      cod_concelho,
      cod_localidade,
      cod_arteria,
    };

    return finalAddress;
  }
}

module.exports = new SingleAddress();
