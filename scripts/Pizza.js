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
        const pizzaContainerEl=creator.createElwithClasses('div', 'pizza-item', 'dish-item');
        const imdWrapper=creator.createElwithClasses('div','pizza-item--imd-wrapper');
        const img=creator.createElwithAttr('img','src', this.src);
        imdWrapper.append(img);
        const aboutContainer=creator.createElwithClasses('div', 'pizza-item--details', 'stack-w-md');
        const nameEl=creator.createElwithClasses('h3', 'pizza-item--name');
        nameEl.innerHTML=this.name;
        const descrEl=creator.createElwithClasses('p', 'pizza-item--descr');
        descrEl.innerHTML=this.description;
        const buyContainer=creator.createElwithClasses('div', 'pizza-item--buyBtns');
        
        for(const key of Object.keys(this.prices)){
            const priceContainer=creator.createElwithClasses('div', 'pizza-item--dish-prise-btn')
            const sizeEl=creator.createElwithClasses('span', 'pizza-item--dish-size');
            const priceEl=creator.createElwithClasses('span', 'pizza-item--dish-prise');
            sizeEl.innerHTML=key;
            priceEl.innerHTML='£'+this.prices[key];
            priceContainer.append(sizeEl, priceEl)
            buyContainer.append(priceContainer);
        }
        aboutContainer.append(nameEl, descrEl, buyContainer);
        pizzaContainerEl.append(imdWrapper, aboutContainer);
        return pizzaContainerEl;
    }
}