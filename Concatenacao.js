/*
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreval("Digite o nome:")
  leia(nome)
  escreval("Digite o numero")
  leia(numero)
  
  escreval(nome," : ", numero, 15)

Fimalgoritmo
*/
var  nome, numero

nome = prompt("Digite o seu nome")
numero = prompt("Digite o seu numero")

document.getElementById("paragrafo").innerText = nome + " : " + numero 
