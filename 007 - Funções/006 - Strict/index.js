"use strict";

//Strict serve para nao causar erros silenciosos no JS. Exemplos em alguns casos o JS cria uma variavel que n foi criada mas foi setada com valores e lida por algo,
//isso pode gerar problemas no futuro

(() => {
    teste = "teste"
})

console.log(teste)