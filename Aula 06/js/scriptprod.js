// Add um link de arquivo CSS no index.HTML.
window.document.head.innerHTML = `<link rel="stylesheet" href="css/styles02.css" />`;

// Criar divCard para exibir as imagens dos produtos ao clicar na foto em miniatura do prod.
const divCard = document.createElement('div');
// Definir um atributo class para a divCard com nome divCard
divCard.setAttribute('class', "divCard");

// Criar uma imagem para que ao clicar nas fotos dos produtos sejm mostrada a foto selecionada
const imgCard = document.createElement('img');
imgCard.setAttribute('id', 'imgCard');
divCard.appendChild(imgCard);

// Foi criado um elemento de HTML para a tag de link(a) para fechar a divCard. Quando o usuario clicar no botão fechar será chamada uma função que recolhe a divCard.
const fechar = document.createElement('a');
fechar.innerHTML = "[X] Fechar";
fechar.setAttribute('class',"fechar");
divCard.appendChild(fechar);

fechar.onclick = function(){
    document.getElementsByClassName("divCard")[0].style.height = "0vh";
    document.getElementById("imgCard").style.opacity = "0";
    
}


const body = window.document.body;


function carregarProdutos(){
    
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Feira do Rolo';
    header.appendChild(h1);
    
    const main = document.createElement('main');

    var i = 0; 
    while (i < listaProdutos.length){

        var divProduto = document.createElement('div');
        var imgProduto = document.createElement('img');
        var h2Discr = document.createElement('h2');
        var h3Marca = document.createElement('h3')
        var pPreco = document.createElement('p');

        divProduto.setAttribute('class', 'divProduto')
        imgProduto.setAttribute("src", listaProdutos[i].thumbnail);
        imgProduto.setAttribute("class", "imgProduto")

    h2Discr.innerHTML = listaProdutos[i].title;
    h3Marca.innerHTML = listaProdutos[i].brand;
    pPreco.innerHTML = listaProdutos[i].price
       
    divProduto.appendChild(imgProduto);
    divProduto.appendChild(h2Discr);
    divProduto.appendChild(h3Marca);
    divProduto.appendChild(pPreco);
    main.appendChild(divProduto);

    var divMiniatura = document.createElement("div");
    divMiniatura.setAttribute("class", "divMiniatura");

    var x = 0;
    while( x < listaProdutos[i].images.length){
        var imgMiniatura =  document.createElement("img");
        imgMiniatura.setAttribute('src',listaProdutos[i].images[x]);
        imgMiniatura.setAttribute("class", "imgMiniatura");
        
        imgMiniatura.addEventListener("click", exibirImagem.bind(this,listaProdutos[i].images[x]));
        
        
        divMiniatura.appendChild(imgMiniatura);
        x++;
    }

    divProduto.appendChild(divMiniatura);
    main.appendChild(divProduto);
    i++;

    } 
    body.appendChild(divCard);
    body.appendChild(header);
    body.appendChild(main);
}
function exibirImagem(foto){
    document.getElementsByClassName("divCard")[0].style.height = "60vh";
    document.getElementById("imgCard").src = foto;
    document.getElementById("imgCard").style.opacity = "1";

}

body.addEventListener("load", carregarProdutos());
