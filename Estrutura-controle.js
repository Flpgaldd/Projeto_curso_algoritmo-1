
/*escreval("Digita o nome do aluno")
leia(nome)
escreval("Digita a nota 01 do aluno")
leia(nota1)
escreval("Digita a nota 02 do aluno")
leia(nota2)
media := (nota1 + nota2) / 2

se media >= 50 entao
   escreval("Aprovado!")
senao
   escreval("Reprovado!")
fimse*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a nota 1 do aluno")
nota2 = prompt("Digite a nota 2 do aluno")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 50){
    alert("aprovado! Aluno: "  + nome + " nota: " + media)
}
else
    alert("reprovado! Aluno: " + nome + " nota: " + media)
