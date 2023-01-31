/*
Comparação entre variovel e arry. Como obter dados de uma variavel e uma array.
*/
const nome = "Pedro, Paulo";
console.log(nome);
//Exibir apenas o Paulo
console.log(nome.substring(6,12));

//Criando uma arraypara nomes
var nomes = ["Pedro", "Paulo"];
console.log(nomes);

//Exibir apenas o Paulo
console.log(nomes[1]);


//Vamos add mais um nome ao array usaremos o comando push
nomes.push("Roberto");
console.log(nomes);

//Exibir apenas o Ultimo nome
console.log(nomes[nomes.length-1]);

//Vamos add mais nomes ao array usando o comando push
nomes.push("Alberto", "João", "Vanessa");
console.log(nomes);
console.log("-------------------------------");

//Vamos criar dois produtos de Informática
prod1 = {
    nome:"Mouse",
    marca:"Microsoft",
    preço: "R$ 150.00"
};
prod2 = {
    nome:"Teclado",
    marca:"Microsoft",
    preço: "180.00"
};

//Vamos criar um array de produtos
const produtos = [prod1, prod2];
console.log(produtos);
//Exibir apenas o produto 1(prod1)
console.log(produtos[0]);

//Exibir a marca do produto 1(prod1)
console.log(produtos[0].marca);
console.log("-------------------------------");

//Criar uma array lista de clientes
const clientes = [
    {
    Nome: "Tadeu",
    Idade: 25,
    Cidade: "Leme"
    },

    {
    Nome: "Fernanda",
    Idade: 40,
    Cidade: "Campinas"
    },
];
console.log(clientes);

//Vamos add novo cliente
clientes.push ({
    nome: "Gabriel",
    Idade: 30,
    Cidade: "São Paulo"
});
console.log(clientes);


// **********************************************
//Exibir produtos no div do navegador

var pnome = produtos[0].nome;
var pmarca = produtos[0].marca;
var ppreco = produtos[0].preço;

// document.getElementById("produto1").innerHTML = pnome; 
// document.getElementById("produto1").innerHTML += pmarca;
// document.getElementById("produto1").innerHTML += ppreco;

//Criar uma constante para exibir os dados do produto na div
const saida = "<h2>"+pnome+"</h2><p class='m'>"+pmarca+"</p><p class='p'>"+ppreco+"</p>";
document.getElementById("produto1").innerHTML = saida; 

//Exibir os dados do produto2 vamos montar os dados de saida em uma constatnte usando template string
const saida2 = `<h2>${produtos[1].nome}</h2>
                <p class='m'>${produtos[1].marca}</p>
                <p class='p'>${produtos[1].preço}</p>`;
                document.getElementById("produto2").innerHTML = saida2;

// Contagem de 1 até 10 para colocar no console
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//
for(let bt = 1; bt <=10; bt++){}
    document.getElementById("caixa").innerHTML += `<button> Botão $[bt]<button>´;