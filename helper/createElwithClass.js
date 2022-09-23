export function createElwithClass(tag, classN){
    const el=document.createElement(tag);
    el.classList.add(classN);
    return el;
}
export function createElwithAttr(tag, attr, attrValue){
    const el=document.createElement(tag);
    el.setAttribute(attr, attrValue);
    return el;
}