//Crianção do Array cidades

const cidades = ["Guarulhos", "Campinas", "Atibaia", "São Paulo"];

// Criação do Array produtos

const produtos = [
    {
        idProduto: 01,
        nomeDoProduto:"Mouse",
        marca:"Microsoft",
        preco:100.53      
    },
    {
        idProduto: 02,
        nomeDoProduto:"Teclado",
        marca:"Microsoft",
        preco: 150.90     
    },
    {
        idProduto: 03,
        nomeDoProduto:"SSD 480gb",
        marca:"SanDisk",
        preco:430.00    
    },
];

// Criando uma Array de clientes

const clientes = [
    {
        idCliente:15,
        nome:"Pedro",
        idade:38
    },
    {
        idCliente:16,
        nome:"Vanessa",
        idade:22
    },
]

// Criando uma Array de obejetos vendas

const vendas =
[
    {
        idVenda: 1010,
        data:"02/02/2023",
        IdCliente:15,
        produtos:{
            
                idProduto:01,
                quantidade:3
            },
            
                idProduto:02,
                quantidade:3
            }
]