const cepSpan = document.querySelector('.cart__address');

export const getAddress = async (cep) => {
  const promise1 = fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const promise2 = fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  const resolve = await Promise.any([promise1, promise2]).then((data) => data.json());
  return resolve;
};
// console.log(await getAddress('01001000'))
export const searchCep = async (cep) => {
  try {
    const cepObj = await getAddress(cep);
    const { address, district, city, state, street, neighborhood } = cepObj;
    if (cepObj.code) {
      throw new Error('teste');
    }
    if (cepObj.address) {
      cepSpan.textContent = `${address} - ${district} - ${city} - ${state}`;
      return;
    }
    cepSpan.textContent = `${street} - ${neighborhood} - ${city} - ${state}`;
    return;
  } catch (erro) {
    if (erro) cepSpan.textContent = 'CEP não encontrado';
  }
};
