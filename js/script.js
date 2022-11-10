{
    const welcome = () => {
        console.log("Witam wszystkich co tutaj zaglądają 😀");
    }

    const onShowTableOnClick = () => {
        const buttonText = document.querySelector(".js-buttonText");
        const tableHiden = document.querySelector(".js-hiden");

        tableHiden.classList.toggle("hiden");
        buttonText.innerText = tableHiden.classList.contains("hiden") ? "Pokaż tabelę" : "Ukryj Tabelę";
    };

    const init = () => {
        const buttonTable = document.querySelector(".js-buttonTable");

        buttonTable.addEventListener("click", onShowTableOnClick);
    }

    welcome();
    init();
}