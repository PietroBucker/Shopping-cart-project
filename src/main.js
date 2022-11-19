import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import './style.css';

const criaProdutos = document.querySelector('.products');
const sectionForLoad = document.querySelector('.container');
const cartProcts = document.querySelector('.cart__products');
const total = document.querySelector('.total-price');
const load = document.createElement('span');
document.querySelector('.cep-button').addEventListener('click', searchCep);

const criaLoad = (param, classe) => {
  load.classList = classe;
  load.textContent = param;
  sectionForLoad.insertBefore(load, criaProdutos);
};

const criaElementos = async (param) => {
  try {
    const data = await fetchProductsList(param);
    data.forEach((product) => {
      criaProdutos.appendChild(createProductElement(product));
    });
    sectionForLoad.removeChild(load);
  } catch (erro) {
    criaLoad(erro.message, 'error');
  }
};

const criaElementosCart = async (ids) => {
  const objects = await Promise.all(ids.map(async (id) => fetchProduct(id)));
  objects.forEach((object) => {
    cartProcts.appendChild(createCartProductElement(object));
  });
};

window.onload = () => {
  criaLoad('carregando...', 'loading');
  criaElementos('computador');
  criaElementosCart(getSavedCartIDs());
  total.textContent = localStorage.getItem('total');
};
