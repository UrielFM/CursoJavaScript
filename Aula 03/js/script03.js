function troca (){
    var imagem = document.getElementById("foto").src;
    console.log(imagem);

    //Vamos pegar a qtd de caracteres da variavel imagem com comando length

    console.log(imagem.length);
    
    //vamos utilizar o comando substring para obter um trecho de texto do caminho do nome do arquivo
    console.log(imagem.substring(imagem.length - 14,imagem.length));

    var rsimg = imagem.substring(imagem.length - 14,imagem.length);

    rsimg = rsimg == "img/foto01.jpg" ? "img/foto02.jpg" : "img/foto01.jpg";
    document.getElementById("foto").src = rsimg;
   
    console.log(rsimg);

}

//vamos fazer uma instancia da classe Date(). esta classe possui muitas funções como: getHours, getDate, getMonth.
function infoData(){

    const tempo = new Date();
    var datacompleta = tempo.toLocaleDateString();
    var diames = tempo.getDate(); //traz o dia do mês;
    var diasemana = tempo.getDay(); //traz as posções (0, 1, 2 ...) da semana indexado de 0 á 6;
    var mes = tempo.getMonth(); //traz as posições (0,1,2,3...) do mês indexado de 0 á 11;
    var hora = tempo.getHours(); 
    var minutos = tempo.getMinutes();
    var segundos = tempo.getSeconds();

    
   var dias = ""

   //Desvio de fluxo com switch case
    switch(diasemana){
        case 0: 
        dias = "Domingo";
       break;
       case 1: 
        dias = "Segunda-Feira";
       break;
       case 2: 
        dias = "Terça-Feira";
       break;
       case 3: 
        dias = "Quarta-Feira";
       break;
       case 4: 
        dias = "Quinta-Feira";
       break;
       case 5: 
        dias = "Sexta-Feira";
       break;
       case 6: 
        dias = "Sábado";
       break;
       default:
        alert("Este dia da semana não existe")

        }
       
     switch(mes){
           case 0: 
            m = "Janeiro";
           break;
           case 1: 
            m = "Fevereiro";
           break;
           case 2: 
            m = "Março";
           break;
           case 3: 
            m = "Abril";
           break;
           case 4: 
            m = "Maio";
           break;
           case 5: 
            m = "Junho";
           break;
           case 6: 
            m = "Julho";
           break;
           case 7: 
            m = "Agosto";
           break;
           case 8: 
            m = "Setembro";
           break;
           case 9: 
            m = "Outurbro";
           break;
           case 10: 
            m = "Novembro";
           break;
           case 11: 
            m = "Dezembro";
           break;
           default:
            alert("Este Mês não existe")
            break;
            }

    console.log("Hoje e %d de %s O dia da semana é %s", diames,m,dias)

    console.log(datacompleta);
        }