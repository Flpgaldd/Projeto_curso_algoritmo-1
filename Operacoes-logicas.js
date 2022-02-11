/*
passou := falso
escreval("Digite o nome do aluno")
leia(nome)
escreval("Digite a nota 01 do aluno")
leia(nota1)
escreval("Digite a nota 02 do aluno")
leia(nota2)
media := (nota1 + nota2) / 2

se media >= 50 entao
   passou := verdadeiro
fimse

se ( passou ) && ( media >=50 || media <= 70) entao
   escreval("aprovado! Aluno:", nome)
   escreval(" Nota:",media)
senao
   escreval("Reprovado! Aluno:", nome)
   escreval(" Nota:",media)
fimse
*/
var nome, nota1, nota2, passou;
passou = true;

nome = prompt("Digite o nome do aluno")
nota1 = prompt("Digite a nota 1 do aluno")
nota2 = prompt("Digite a nota 2 do aluno")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 50)
    passou = false;

if(!passou || (media >= 70 && media <= 100))
    alert("aprovado! Aluno: "  + nome + " nota: " + media)
else
    alert("reprovado! Aluno: " + nome + " nota: " + media)