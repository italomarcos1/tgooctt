class MultipleAddress {
  async execute(data) {
    console.log(data);

    const a = data.map(e => Object.entries(e));

    const filteredAddressObjects = a.map(e => e.filter(f => f[1] !== null));

    // console.log(filteredAddressObjects);

    // o 'fromEntries' cria um objeto a partir do array de arrays, o reverso do passo anterior.
    // fazemos isso após filtrar os campos null
    const filteredAddress = filteredAddressObjects.map(e =>
      Object.fromEntries(e)
    );

    console.log(filteredAddress);

    const finalAddressResult = [];
    // iterando por cada campo do array, formatando o nome da rua e dando push.
    // assim retorna vários endereços
    filteredAddress.forEach(e => {
      const f = { ...e };

      delete f.id;
      delete f.cod_distrito;
      delete f.cod_concelho;
      delete f.cod_localidade;
      delete f.cod_arteria;
      delete f.num_cod_postal;
      delete f.ext_cod_postal;
      delete f.createdAt;
      delete f.updatedAt;

      delete f.nome_localidade;
      delete f.desig_postal;

      const result = `${Object.values(f).join(' ')}, ${e.nome_localidade} - ${
        e.desig_postal
      }`;

      finalAddressResult.push({
        id: e.id,
        full_address: result,
        nome_localidade: e.nome_localidade,
        desig_postal: e.desig_postal,
        cod_distrito: e.cod_distrito,
        cod_concelho: e.cod_concelho,
        cod_localidade: e.cod_localidade,
        cod_arteria: e.cod_arteria,
      });
    });

    console.log(finalAddressResult);

    return finalAddressResult;
  }
}

module.exports = new MultipleAddress();
