const container = document.getElementById("container");
const productsSection = document.getElementById("products-section");
const productsList = document.getElementById("products-list");
const search = document.getElementById("search");
const listHead = document.getElementById("listHead");
const itemsName = document.getElementsByClassName("itemsName");
const collapseE = document.getElementsByClassName("collapse");

//↓↓↓ stackoverflow EventListener ↓↓↓
let addEvent = function (object, type, callback) {
    if (object == null || typeof (object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on" + type] = callback;
    }
};
//↑↑↑ stackoverflow EventListener ↑↑↑

addEvent(window, "load", ajustDiv);
addEvent(window, "resize", ajustDiv);
addEvent(window, "click", collapse);

function ajustDiv() {
    const totalHeight = productsSection.offsetHeight;
    const subHeight = search.offsetHeight;
    const subHeight2 = listHead.offsetHeight;
    const newHeight = totalHeight - subHeight - subHeight2 - 4;
    productsList.style.height = newHeight + "px";
}

//↓↓↓ w3 collapse ↓↓↓
function collapse() {
    for (i = 0; i < itemsName.length; i++) {
        itemsName[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}
//↑↑↑ w3 collapse ↑↑↑
