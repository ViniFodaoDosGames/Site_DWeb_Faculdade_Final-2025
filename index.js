let projetos = {
    informacao: [
        {
            Nome: "Projeto_1",
            Imge: "./img/Template.png",
            Desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            Data: "XX/XX/XXXXX"
        },
        {
            Nome: "Projeto_2",
            Imge: "./img/Template.png",
            Desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            Data: "XX/XX/XXXXX"
        },
    ],
};



for (const data in projetos.informacao) {
    if (!Object.hasOwn(projetos.informacao, data)) continue;
    
    console.log(projetos.informacao[data]);
    console.log(projetos.informacao[data].Nome);
    
    let card = document.createElement("div");
    
}