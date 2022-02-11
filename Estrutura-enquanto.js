/*
// Seção de Declarações das variáveis 
nome: caractere
idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("digite a quantidade de vezes que vai ser verificado a idade:")
leia(limite)
contador := 0
enquanto contador < limite faca
    escreva(" digite o seu nome: ")
    leia(nome)
    escreva("digite a sua idade: " , nome, " : " )
    leia(idade)
    se idade >18 entao
        escreval(nome, " Você é maior de idade!! ")
    senao
        escreval(nome, " você é menor de idade!! ")
    fimse
    contador := contador + 1
    fimenquanto
    */
  
    function acaoBotao() {
    var nome, idade, limite, contador
   limite = prompt("digite a quantidade de vezes que vai ser verificado a idade:")
   contador = 0 
   while(contador < limite){
    
    nome =  prompt(" digite o seu nome: ")  
    idade = prompt("digite a sua idade: " + nome)
    if (idade >18)
        document.getElementById("paragrafo").innerText = nome + " Você é maior de idade!! "
    else
        document.getElementById("paragrafo").innerText = nome + " Você é menor de idade!! "
    contador++
   }
}