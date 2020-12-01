class SingleAddress {
  async execute(data) {
    const userData = data[0];

    delete userData.createdAt;
    delete userData.updatedAt;

    // 'entries' retorna um array de arrays chave-valor.
    // isso é necessário para filtrarmos no próximo passo,
    // onde iremos verificar o segundo elemento e conferir se é null.
    // Exemplo: { id: 12, nome: 'Italo', idade: null } retorna
    // [ [ 'id', 12 ],[ 'nome', 'Italo' ],[ 'idade', null ] ]
    // é um array de arrays, cada array-filho tem duas posições.
    // se a segunda opção for null, descartamos o campo no método 'filter'
    const entries = Object.entries(userData);

    console.log(entries);

    // filtra os campos 'null', e retorna apenas campos com valor
    const filteredAddressObject = entries.filter(f => f[1] !== null);

    // gerando um objeto com os campos filtrados
    const filteredAddress = Object.fromEntries(filteredAddressObject);

    // criando um objeto para copiar os dados e não alterar o original
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

    // juntando tudo em um array, separado por 'espaço'
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
      num_cod_postal,
      ext_cod_postal,
    } = userData;

    // nome da rua
    let fullAddress = `${result}, ${nome_localidade} - ${desig_postal}`; // eslint-disable-line
    let street_name = `${result}`; // eslint-disable-line

    // o campo cliente representa endereços comerciais. o nome é anexado ao início
    if (cliente) {
      fullAddress = `${cliente} - ${fullAddress}`;
      street_name = `${cliente} - ${street_name}`;
    }

    // endereço final. não mude o nome dos campos, isso implicará em muitas alterações no front-end
    const finalAddress = {
      id,
      full_address: fullAddress,
      nome_localidade,
      distrito: desig_postal,
      cod_distrito,
      cod_concelho,
      cod_localidade,
      cod_arteria,
      street_name,
      num_cod_postal,
      ext_cod_postal,
    };

    return finalAddress;
  }
}

module.exports = new SingleAddress();
