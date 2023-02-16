// function media (array_numeros){
//     let rs = 0
//     for(var i = 0; i < array_numeros.length; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length;
// }

// // Função const
// const media2 = function(array_numeros){
//     let rs = 0;
//     for (var i = 0; i <array_numeros.length ; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length;
// };

// // Arrow function
// const media3 = (array_numeros) => {
//     let rs = 0;
//     for (var i = 0; i <array_numeros.length ; i++){
//         rs += array_numeros[i];
//     }
//     return rs / array_numeros.length;
// };

// Função Exibir(nomeada e desconectada do for)
// function exibir(cli,p){
//         console.log(cli.nome);
//         console.log(cli.idade);
//         console.log(cli.produtos);
//         console.log(`A posição do cliente acmia é ${p}`);
// };


// // Função de promessa de executar
// function getUsers(){
//     return new Promise((resolve,reject) => {
        
//         setTimeout(()=>{
       
//         resolve([
//             {use:"João",email:"joao@gmail.com"},
//             {use:"Paulo",email:"paulo@gmail.com"}
//         ]);

//     },4000)

//     });
// }

// function mostrar(usuarios){
//     console.clear();
//     console.log(usuarios);
// }

// const resultado = getUsers();
// resultado.then(mostrar);


// Função Promise onde retorna a informção
function listarFilmes(){
    return new Promise((resolve,reject) => {
        resolve(listaFilmes);
        reject("Erro ao tentar Executar");
    });
}

listarFilmes()
.then((x)=>{
    console.log(x)
})
.catch((e)=>{
    console.error(e)
});