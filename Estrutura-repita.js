/*
// Seção de Declarações das variáveis 
sairLoop: caractere
valor1, valor2: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
repita
    escreva("Digite o primeiro valor: ")
    leia(valor1)
    escreva("Digite o proximo valor:  ")
    leia(valor2)
    escreval("Resultado: " ,valor1 + valor2)
    escreval("Deseja sair? S/N")
    leia(sairLoop)
ate sairLoop <> "N"
*/

function acaoBotao() {
    var sairLoop, valor01, valor02
    do{
        valor01 = prompt("Digite o primeiro valor: ")
        valor02 = prompt("Digite o proximo valor:  ")
        document.getElementById("paragrafo").innerText =  "Resultado: " + (parseint( valor1 ) + parseInt( valor2 ) )
        sairLoop = prompt("Deseja sair? S/N")
    }while(sairLoop == "N") 
}
