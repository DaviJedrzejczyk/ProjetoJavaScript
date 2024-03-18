"use strict"

const teste = document.querySelector("h1")

const classP = document.querySelector(".idd") //Esse . referencia a classe definida no html

const idP = document.querySelector("#id") //Esse # busca pelo id definido do html

const classP2 = document.querySelector(".idd strong") //nesse casso eu busco o strong dentro da tag html, tecnicamente acessando o filho da tag que possui a classe "idd"
                                                      //ignora todos os outros strongs fora do contexto

console.log(classP.querySelector("strong")) //faz a mesma coisa que a const classP2