import { Pizza } from "./pizza.js";


export function renderPizzas(p_data, section){
    for(const data of p_data){
        section.append(new Pizza(data).render());
    }
}


