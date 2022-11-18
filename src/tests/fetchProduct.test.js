import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('testa se o fetchProducts é uma funçao', () => {
    expect(fetchProduct).toBeInstanceOf(Function);
  });

  it('testa fetchProduct com o argumento do produto "MLB1405519561" e teste se fetchfoi chamada', async () => {
    const expected = await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled();
  })

  it('testa fetchProduct com o argumento do produto "MLB1405519561" e teste se fetchfoi chamada com endpoint especifico', async () => {
    const expected = await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561');
  })

  it('função fetchProductsListcom o argumento "MLB1405519561" é uma estrutura de dados igual ao objeto de product', async () => {
    const expected = await fetchProduct('MLB1405519561');
    expect(expected).toEqual(product);
  });

  it('chamar a função fetchProductsListsem argumento, retorna um erro com a mensagem: "TID não informado"', () => {
    expect(fetchProduct()).rejects.toThrow(new Error('ID não informado'));
  });
});
