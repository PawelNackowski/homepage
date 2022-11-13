{
    const welcome = () => {
        console.log("Witam wszystkich co tutaj zaglądają 😀");
    }

    const onShowTableOnClick = () => {
        const buttonText = document.querySelector(".js-buttonText");
        const tableHidden = document.querySelector(".js-hidden");

        tableHidden.classList.toggle("hidden");
        buttonText.innerText = tableHidden.classList.contains("hidden") ? "Pokaż tabelę" : "Ukryj Tabelę";
    };

    const init = () => {
        const buttonTable = document.querySelector(".js-buttonTable");

        buttonTable.addEventListener("click", onShowTableOnClick);
    }

    welcome();
    init();
}