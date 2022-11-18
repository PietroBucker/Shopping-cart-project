export const fetchProduct = async (ids) => {
  if (!ids) {
    throw new Error('ID não informado');
  }
  const resolve = await fetch(`https://api.mercadolibre.com/items/${ids}`);
  const data = await resolve.json();
  return data;
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  if (param !== 'computador') {
    throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
  }
  const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
  const data = await resolve.json();
  return data.results;
};
