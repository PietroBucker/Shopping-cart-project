import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(fetchProductsList).toBeInstanceOf(Function);
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const expect = await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const expect = await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('função fetchProductsListcom o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const expect = await fetchProductsList('computador');
    expect(expect).toEqual(computadorSearch);
  });
  });fetch