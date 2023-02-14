window.document.body.onload = function(){
    // Vamos chamar a função soma com a passagem de numeros de um array.
    var numeros = [10, 30, 5, 8, 20, 45, 0];
    soma(numeros);

    // var valores =  prompt("Digite números separados por virgula");
    // O camando Split aplicado a variavel valores é capaz de quebrar os numeros digitados pelo ususario onde há virgula e assim gerar um array com estes números.
    // var n = valores.split(",");
    // console.log(n);

    // var np = [];
    // for( var i = 0 ; i <n.length ; i++){
    //     np.push(parseInt(n[i]));
    // }
    // console.log(np);
    // menor(np);
    // maior(np);

    const inputNome = document.createElement("input");
    inputNome.setAttribute("placeholder","Digite o seu nome");
    inputNome.onblur = function(){
    inputNome.value = mensagem(inputNome.value);
    console.log(mensagem(inputNome.value));
    window.document.title = mensagem(inputNome.value);
    };

    window.document.body.appendChild(inputNome);

    // var nome = prompt("Digite seu nome");
    // inputNome.value = msg(nome);

    // var ano = prompt("Digite um Ano");
    // inputNome.value = anoBissexto(ano);

    // console.log(Math.round(1 + Math.random()*254));
    window.document.body.innerHTML = paletaCores(10,20);
};

