import *as creator from '../helper/createElwithClass.js';

export function Pizza(data){
    this.name=data.name;
    this.description=data.descr;
    this.src=data.img;
    this.prices=data.prices;
    this.id=data.id;
}

Pizza.prototype={
    constructor:Pizza,
    render:function(){
        const pizzaContainerEl=creator.createElwithClass('div', 'pizza-item');
        const imdWrapper=creator.createElwithClass('div','pizza-item--imd-wrapper');
        const img=creator.createElwithAttr('img','src', this.src);
        imdWrapper.append(img);
        const aboutContainer=creator.createElwithClass('div', 'pizza-item--details');
        const nameEl=creator.createElwithClass('h2', 'pizza-item--name');
        nameEl.innerHTML=this.name;
        const descrEl=creator.createElwithClass('p', 'pizza-item--descr');
        descrEl.innerHTML=this.description;
        const buyContainer=creator.createElwithClass('div', 'pizza-item--buyBtns');
        
        for(const key of Object.keys(this.prices)){
            const sizeEl=creator.createElwithClass('span', 'pizza-item--dish-size');
            const priceEl=creator.createElwithClass('span', 'pizza-item--dish-prise');
            sizeEl.innerHTML=key;
            priceEl.innerHTML=this.prices[key];
            buyContainer.append(sizeEl, priceEl);
        }
        aboutContainer.append(nameEl, descrEl, buyContainer);
        pizzaContainerEl.append(imdWrapper, aboutContainer);
        return pizzaContainerEl;
    }
}