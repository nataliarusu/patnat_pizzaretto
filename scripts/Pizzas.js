import { Pizza } from "./pizza.js";
import {p_data} from './pizza_data.js';
const pizzasSection=document.querySelector('#pizzas');

export function renderPizzas(){
    for(const data of p_data){
        pizzasSection.append(new Pizza(data).render());
    }
}


