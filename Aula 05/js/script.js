//A função carregar dados é utilizada para carregar e exibir os dados relacionadoa idade, cidade e produtos em contole select do html e para isso estamos usando uma estrutura de repetição fazndo contagem de 18 a 90 anos para idade em quanto para a cidade e produtos usamos o laço "for" para ler o array de cidades e produtos.

function carregarDados(){
    
    // Foram cridos constantes com referencia aos controles de formulario de HTML. A ideia e não ficar  reescrevendo o comando varias vezes.
    const nome = document.getElementById("nome");
    const idade = document.getElementById("idade");
    const cidade = document.getElementById("cidade");
    const prod = document.getElementById("prod");

    // Foi add um opition ao select idade
    idade.innerHTML =`<option>Selecione a sua Idade</option>`;
    
    // Para preencher a idade de 18 a 90 anos, fizemos uma estrutura de repetição com "for", onde e criado um elemento option com a idade de 8 a 90 anos dentro do select da idade.
    for(let i = 18; i <= 90; i++){
        idade.innerHTML += `<option>${i}</ption>`;
    }

    // Add um opition ao controle select da cidade
    cidade.innerHTML = `<option>Selecione a sua Filial</option>`;

    // Esta estrutura de repetição foi criado para ler todo o conteudo da array ciddes, e obter um cidade por vez e assim criar um controle option para cada cidade e add ao controle selection.
    for(let i = 0; i <= 3; i++){
        cidade.innerHTML += `<option>${cidades[i]}</option>`
    }

    // Nesta estrutura de repetição estamos obtendo os produtos do array produtos. Exibindo os nomes dos produtos por meio do controle option. Neste caso o nome do produto é um propriedade array produtos, assim foi nescessario add um ponto depois do colchetes para acessar esta propriedade. Também foi dd ao controle option o atributo value, que determina qual o valor da opção selecionada pelo usuario. No value foi atribuido o valor id do produto. 
    prod.innerHTML = `<option>Selecione o produto</option>`;
    for(let i = 0; i <= 2; i++){
        prod.innerHTML += `<option value=${produtos[i].idProduto}>${produtos[i].nomeDoProduto}</option>`;
    }
}

// Esta função e utilizada para encontrar um determinado produto na array de produto quando o usuario seleciona um produto na pagina HTML. Ao seleciona o produto o Id do produto e passado via paramentro para essa função e então e utilizado um estrutura de repetição para localizar o produto no array e exibi-lo em uma DIV.
function exibirProduto(id){

    const rsprod = document.getElementById("rsprod");

// O "for" utiliza uma leitura de ponta a ponta afim de encontrar o Id para a função no array de produtos, comparando o id passado com o id presente no array de produtos. Ao encontrar o id que o ususario passou a estrutura de repetição é forcada a parar o comando BREAK e os dados do produto são add ao div que está na pagina.
   for(let i = 0; i <= 2; i++){
    
    if(produtos[i].idProduto==id){
    rsprod.innerHTML = produtos[i].nomeDoProduto;
    rsprod.innerHTML += produtos[i].marca;
    rsprod.innerHTML += produtos[i].preco;
    break; //Força a parada do laço "for"  
    }
   }
}