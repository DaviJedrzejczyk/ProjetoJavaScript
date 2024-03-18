"use script"

//dom [principal]
//fragmento [secundario fora do dom principal]


const ul = document.querySelector("ul")
//esse fragment nao consome memoria do nosso html quando criado aqui, somente do js
const frag = document.createDocumentFragment();

const number = [1,2,3,4,5]

number.forEach((element) => {
    const lo = document.createElement("li");
    lo.textContent =element;
    frag.append(li);
})

//Isso nos da performance de codigo, também eh comumente usado no ambiente profissional. Todos os dados sao primeiramente salvos 1 por 1 no frag, e quando terminado ele
//salva no frag, assim que chega nesse ul.apeend() ele joga os dados de uma vez no html, assim o usuário nao tera que esperar pra carregar um por um e sim vera tudo de
//uma vez.

ul.append(frag)