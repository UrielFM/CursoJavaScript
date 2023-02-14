// Função que não retorna
function soma(array_numeros){
    
    var rs = 0;
    for( var i = 0 ; i < array_numeros.length ; i++){
        rs += array_numeros[i];
    }
    console.log(rs);
}
function maior(array_numeros){
    var m = array_numeros[0];
    for(var i = 1 ; i <array_numeros.length ; i++){
        if(array_numeros[i] > m){
            m = array_numeros[i];
        }
    }
    console.log(m);
}
function menor(array_numeros){
    var m = array_numeros[0];
    for(var i = 1 ; i <array_numeros.length ; i++){
        if(array_numeros[i] < m){
            m = array_numeros[i];
        }
    }
    console.log(m);
}
// Funçõe com retorno
function mensagem (nome){
    return `Olá ${nome}`;
}
// Função anonimas pode ser vinculadas a variaveis
const msg = function(nome){
    return `Olá Sr(a). ${nome}`;
};
// Idade em ano bicesto
const anoBissexto = function(ano){
    if (ano % 4 == 0){
        return "Ano Bissexto";
    }else{
        return "Ano não é Bissexto"
    }
};
// Criando uma  paleta de cores
const paletaCores = function(linha,coluna){

    var tabela = "<table>";

    for(var lin = 0; lin < linha; lin++){
        tabela+="<tr>";
        for(var col = 0 ; col < coluna; col++){
            var red = Math.round(1 + Math.random()*254);
            var green = Math.round(1 + Math.random()*254);
            var blue = Math.round(1 + Math.random()*254);
        
            tabela += `<td style='background-color:rgb(${red},${green},${blue})'>_</td>`;
    }
    tabela+="</tr>";
    }
    return tabela;
}