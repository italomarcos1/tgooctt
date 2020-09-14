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

    // {{ url }}/2770-071
    // {{ url }}/3750-107
    // {{ url }}/3750-144

    const {
      cod_distrito,
      cod_concelho,
      cod_localidade,
      cod_arteria,
      nome_localidade,
      num_cod_postal,
      ext_cod_postal,
      desig_postal,
    } = userData;

    const finalAddress = `${result}, ${nome_localidade} - ${desig_postal}`;

    return finalAddress;
  }
}

module.exports = new SingleAddress();
