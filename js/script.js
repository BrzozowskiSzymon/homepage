console.log("Hellow everbody!")

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("boody--dark");
    nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";

    });