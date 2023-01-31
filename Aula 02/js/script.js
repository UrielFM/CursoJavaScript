// Arquivo de Script para a função ola
 function ola () {
     alert("Olá Mundo!");
}

/*
Dentro da pagina terá um botão com ID chamado btnClick. 
Ao clicar neste será chamando uma função Olá ao clicar em um botão no Html. Que executa uma mesnagem de alerta.
*/


// document.getElementById('btnClick').onclick = ola;

//Declaração de variaveis
var nome;
var numero1,numero2;
var resultado;
nome = "";
numero1 = 0;
numero2 = 0;
resultado = 0;

numero1 = prompt("Digite um Valor");
numero2 = prompt("Digite outro valor");
resultado = numero1 * numero2;

console.log("A multiplicação entre o valor %d e %d é %d",numero1,numero2,resultado);
