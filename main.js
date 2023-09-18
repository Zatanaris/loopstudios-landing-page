const openBtn = document.querySelector("#open--btn");
const CloseBtn = document.querySelector("#close--btn");
const BoxMenu = document.querySelector("#content");

const ArrEl = [openBtn, CloseBtn];

const eventElement = function (elements, typeEvent, Callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(typeEvent, Callback);
    }
};

const toggleMenu = function () {
    BoxMenu.classList.toggle("active");
};

eventElement(ArrEl, "click", toggleMenu);
