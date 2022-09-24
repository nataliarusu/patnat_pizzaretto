export function createElwithClasses(tag, ...classN){
    const el=document.createElement(tag);
    for(const cl of classN){
        el.classList.add(cl);
    }     
    return el;
}

export function createElwithAttr(tag, attr, attrValue){
    const el=document.createElement(tag);
    el.setAttribute(attr, attrValue);
    return el;
}