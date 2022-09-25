import {renderPizzas} from './scripts/Pizzas.js';
import {p_data, vegan_p_data} from './scripts/pizza_data.js';

const pizzasSection=document.querySelector('#pizzas');
const vegan_pizzasSection=document.querySelector('#vegan-pizzas');
renderPizzas(p_data, pizzasSection);
renderPizzas(vegan_p_data, vegan_pizzasSection);
