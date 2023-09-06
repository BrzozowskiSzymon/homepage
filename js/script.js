{
    const welcome = () => {
        console.log("Hellow everbody!");
    }
    
    const onChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const nextColorName = document.querySelector(".js-nextColorName");

        body.classList.toggle("body--dark");
        nextColorName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
    
    };

    const init = () => {
        let button = document.querySelector(".js-button");

        button.addEventListener("click", onChangeBackgroundClick);

        welcome();
    };

    init();
}