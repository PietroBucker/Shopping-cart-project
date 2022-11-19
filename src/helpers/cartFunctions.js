/**
 * Função que retorna todos os itens do carrinho salvos no localStorage.
 * @returns {Array} Itens de ids salvos do carrinho ou array vazio.
 */
export const getSavedCartIDs = () => {
  const cartProducts = localStorage.getItem('cartProducts');
  return cartProducts ? JSON.parse(cartProducts) : [];
};
/**
 * Função que adiciona um product ao carrinho.
 * @param {string} id - ID do product a ser adicionado.
 */

export const saveCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = [...cartProducts, id];
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};
// funcoes para precos local storage
export const getSavedCartPrice = () => {
  const cartPrice = localStorage.getItem('cartPrice');
  return cartPrice ? JSON.parse(cartPrice) : [];
};
export const saveCartPrice = (price) => {
  if (!price) throw new Error('Você deve fornecer um Preco');

  const cartPrices = getSavedCartPrice();
  const newCartPrices = [...cartPrices, price];
  localStorage.setItem('cartPrice', JSON.stringify(newCartPrices));
};
/**
 * Função que remove um product do carrinho.
 * @param {string} id - ID do product a ser removido.
 */
export const removeCartID = (id) => {
  if (!id) throw new Error('Você deve fornecer um ID');

  const cartProducts = getSavedCartIDs();
  const newCartProducts = cartProducts.filter((product) => product !== id);
  localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
};
// funçao para remover precos;
export const removeCartPrice = (prices) => {
  if (!prices) throw new Error('Você deve fornecer um Preco');

  const cartPrice = getSavedCartPrice();
  const newCartPrice = cartPrice.filter((price) => price !== prices);
  localStorage.setItem('cartPrice', JSON.stringify(newCartPrice));
};
