export const fetchProduct = async () => {
};

export const fetchProductsList = async (param) => {
  if (!param) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const resolve = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${param}`);
    const data = await resolve.json();
    return data.results;
  } catch (erro) {
    return erro.message;
  }
};
