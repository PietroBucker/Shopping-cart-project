import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(fetchProductsList).toBeInstanceOf(Function);
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    const expected = await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const expected = await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  // it('função fetchProductsListcom o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
  //   const expected = await fetchProductsList('computador');
  //   expect(expected).toEqual(computadorSearch);
  // });

  it('função fetchProductsListcom o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProductsList('computador')).toMatchObject(computadorSearch);
  });

  it('chamar a função fetchProductsListsem argumento, retorna um erro com a mensagem: "Termo de busca não informado"', () => {
    expect(fetchProductsList()).rejects.toThrow(new Error('Termo de busca não informado'));
  });
  });