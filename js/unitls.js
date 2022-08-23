let $ = function(selector, node = document) {
    return node.querySelector(selector)
}

let $$ = function(selector, node = document) {
    return node.querySelectorAll(selector)
}

let creatElement = function(tagName,atribut, atributValue, textValue) {
    let element = document.createElement(tagName);
    if(atribut) {
        element.setAttribute(atribut, atributValue);
    }

    if(textValue) {
        element.textContent = textValue;
    }

    return element
}