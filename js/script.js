console.log("Witam wszystkich co tutaj zaglądają 😀");

let buttonTable = document.querySelector(".js-buttonTable");
let buttonText = document.querySelector(".js-buttonText");
let tableHiden = document.querySelector(".js-hiden");

buttonTable.addEventListener("click", () => {
    tableHiden.classList.toggle("hiden");

    buttonText.innerText = tableHiden.classList.contains("hiden") ? "Pokaż tabelę" : "Ukryj Tabelę";
});
