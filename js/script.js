let elSelect = $(".js-select")
let elList = $(".js-list")

//Add select option
function addSelectOption() {
    let options = []
    pokemons.forEach(el => {
        el.type.forEach(type => {
            if(!options.includes(type)) {
                options.push(type)
            }
        })
    })

    options.forEach(option => {
        let elOption = creatElement("option");
        elOption.textContent = option;
        elOption.value = option;
        elSelect.append(elOption)
    })
}

addSelectOption()



//Add list item
function addListItem(){
    pokemons.forEach(el => {
        let elItem = creatElement("li", "class", "col-md-6 col-lg-4 col-xl-3");

        let elItemContent = creatElement("div", "class", "card bg-success bg-opacity-10");
        elItemContent.setAttribute("style", "height: 400px;")

        let elItemImg = creatElement("img", "src", `${el.img}`);
        elItemImg.setAttribute("style", "height: 270px; width: 100%; object-fit: contan;");

        let elItemName = creatElement("h4", "class", "card-title text-secondary text-center mt-3", `${el.name}`);

        let elItemText = creatElement("p", "class", "card-text text-center text-info fs-5")

        el.weaknesses.forEach((element,i) => {
            let elItemTextContennt = creatElement("span", "class", "px-1")
            elItemTextContennt.textContent= element
            elItemText.append(elItemTextContennt);
        })

        elItemContent.append(elItemImg, elItemName, elItemText)
        elItem.appendChild(elItemContent)
        elList.appendChild(elItem);

    })
}
addListItem()




