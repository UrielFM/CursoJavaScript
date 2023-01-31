function corFundo(){
    var cor = document.getElementById ("txtCor").value;
    var vcor="";

    cor = cor.toLowerCase();
    if (cor == "red"){
        // document.body.style.backgroundColor = "#FF0000";
        vcor = "#FF00000";
    }
    else if(cor == "black"){
       // document.body.style.backgroundColor = "#000000";
       vcor = "#000000";
    }
    else if(cor == "green"){
        // document.body.style.backgroundColor = "#00FF00";
        vcor = "#00FF00";
    }
    else if(cor == "amarelo"){
        // document.body.style.backgroundColor = "yellow";
        vcor = "yellow";
    }
    else if(cor == "azul"){
       // document.body.style.backgroundColor = "blue";
       vcor = "blue";
    }
    else{
       // document.body.style.backgroundColor = "#FFFFFF";
       vcor = "#FFFFFF"
        alert("Cor indisponivel")
    }
    document.body.style.backgroundColor = vcor;
}


function textoClaro(){
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("label")[0].style.color = "white";

}

function textoEscuro(){
    document.getElementsByTagName("h1")[0].style.color = "black";
    document.getElementsByTagName("label")[0].style.color = "black";

}