window.document.head.innerHTML=`<link rel="stylesheet" href="css/styles02.css" />`;

const body = window.document.body;


function paginaProdutos(){
    
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Lista de Produtos';
    header.appendChild(h1);
    
    const main = document.createElement('main');


    var i = 0; 
    while (i < listaProdutos.length){
    var divProdutos = document.createElement('div');
    var imgProdutos = document.createElement('img');
    var h1Title = document.createElement('h1');
    var h2Discr = document.createElement('h2')
    var pdata = document.createElement('p');
    
    divProdutos.setAttribute('class','divProdutos');
    imgProdutos.setAttribute('src');
    imgProdutos.setAttribute('class','imgProduto');
    h2Titulo.innerHTML = listaProdutos[i].title;
    pLancamento.setAttribute('class', 'pdata');
    pLancamento.innerHTML = listaProdutos[i].release_date;
    
    divProdutos.appendChild(imgProdutos);
    divProdutos.appendChild(h2Titulo);
    divProdutos.appendChild(pdata);
    main.appendChild(divProdutos);
    i++; 
}
    

    body.appendChild(header);
    body.appendChild(main);
}
body.addEventListener("load",paginaProdutos());