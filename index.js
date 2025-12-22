let projetos = {
    informacao: [
        {
            id: "123",
            Link: "https://github.com/ViniFodaoDosGames/LIST_TAD-2025?tab=readme-ov-file",
            Nome: "LIST_TAD-2025",
            Imge: "../img/LIST_TAD-2025.png",
            Alte: "Imagem 1",
            Desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            Data: "09/10/2026"
        },
        {
            id: "456",
            Link: "https://www.youtube.com/",
            Nome: "Projeto_2",
            Imge: "../img/Template.png",
            Alte: "Imagem 2",
            Desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            Data: "09/12/2030"
        },
        {
            id: "890",
            Link: "https://www.youtube.com/",
            Nome: "Projeto_2",
            Imge: "../img/Template.png",
            Alte: "Imagem 2",
            Desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            Data: "09/12/2030"
        },
    ],
};


var submit_buttom = document.getElementById("submit_buttom");
var show_all = document.getElementById("show_all");
window.addEventListener("load", () => {
    let cardSection = document.getElementById("cardSection");
    initialization(cardSection);
})


function initialization(cardSection) {

    for (const data in projetos.informacao) {
        if (!Object.hasOwn(projetos.informacao, data)) continue;

        console.log(projetos.informacao[data]);
        console.log(projetos.informacao[data].Nome);

        let card = document.createElement("a");
        let imageSection = document.createElement("div");
        let image = document.createElement("img");

        let textSection = document.createElement("div");
        let titleCard = document.createElement("h3");
        let dateInfo = document.createElement("h5");
        let contentCard = document.createElement("p");

        card.classList.add("card");
        card.setAttribute("target", "_blank");
        imageSection.classList.add("imageSection");
        textSection.classList.add("textSection");
        titleCard.classList.add("titleCard");
        contentCard.classList.add("contentCard");


        contentCard.innerText = projetos.informacao[data].Desc;
        dateInfo.innerText = projetos.informacao[data].Data;
        image.src = projetos.informacao[data].Imge;
        image.alt = projetos.informacao[data].Alte;
        titleCard.innerText = projetos.informacao[data].Nome;
        card.href = projetos.informacao[data].Link;
        card.id = projetos.informacao[data].id;

        imageSection.appendChild(image);

        textSection.appendChild(titleCard);
        textSection.appendChild(dateInfo);
        textSection.appendChild(contentCard);

        card.appendChild(imageSection);
        card.appendChild(textSection);

        cardSection.appendChild(card);
    }

}


submit_buttom.addEventListener("click", () => {
    SearchFunction();
})
show_all.addEventListener("click", () => {
    UndoFilterCards();
})

function SearchFunction() {
    let searchInput = document.getElementById("pesquisar");
    let searchInputValue = searchInput.value.toLowerCase().trim();
    let valuefound = "";

    for (const data in projetos.informacao) {
        if (!Object.hasOwn(projetos.informacao, data)) continue;

        const nameCard = projetos.informacao[data].Nome.toLowerCase().trim();

        console.log(nameCard.lastIndexOf(searchInputValue));
        if (searchInputValue === nameCard) {
            valuefound = nameCard
            break;
        }
    }

    if (valuefound === "") {
        alert("Valor digitado não foi encontrado!");
        UndoFilterCards();
    } else {
        UndoFilterCards();
        FilterCards(valuefound);
    }

}

function FilterCards(nameCard) {

    for (const data in projetos.informacao) {
        if (!Object.hasOwn(projetos.informacao, data)) continue;

        const element = projetos.informacao[data];

        if (nameCard !== element.Nome.toLowerCase()) {

            let cardSelected = document.getElementById(element.id);
            cardSelected.classList.add("invisible");
        }
    }

}

function UndoFilterCards() {

    for (const data in projetos.informacao) {
        if (!Object.hasOwn(projetos.informacao, data)) continue;

        const element = projetos.informacao[data];
        let cardSelected = document.getElementById(element.id);
        cardSelected.classList.remove("invisible");

    }

}
