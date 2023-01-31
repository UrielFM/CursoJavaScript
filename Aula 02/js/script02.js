console.log("Hello, World");

var foo = "bar";
console.log(foo);

var thisVar = 'first value'
var thatVar = 'second value'
console.log("thisVar:", thisVar, "and thatVa:r", thatVar);

var greet = "Hello", who = "World";
console.log("%s, $s!", greet, who);

console.log({
    'Email': 'uriel.fmishima@senacsp.edu.br',
    'Group': {},
    'Id': 45,
    'IsSiteAdmin':false,
    'IsHiddenInUI': false,
    'LoginName': 'i:0#.w|virtualdomain\\user2',
    'PrincipalType': 1,
    'Title': 'user2'
});

console.log("Hello World!");
var x = 10;
var y = 20;
var sun = x + y;
console.log(sun);

//Declarações
var name // variavel
name = "Uriel" //atribuição de valores
//let age = 45 // tipo number
//let isHuman = true // tipo boolean

//console.log(typeof isHuman)// tipo de dado usado na variavel

//Agrupamento de declarações
let age, isHuman
age = 45
isHuman = true

console.log(name, age, isHuman)

//Concatenando e interpolando variáveis
//console.log('O ' + name + ' tem ' + age + ' anos.')

//interpolar valores com template literals or  tamplate strings
console.log( `O ${name} tem ${age} anos.`);

// Object
const person = {
    name: 'Uriel',
    age: 45,
    weight: 88.6,
    isAdmin: true
}
console.log(person)
//console.log(person.age) para saber so a idade

//Array
const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 9
    }
]
//acessar valores dentro do Array
//console.log (animals) // todos os animais
//console.log (animals[0]) so o animal 0 ouo primerio
//console.log (animals.length) mostrar quanto annimais tem
console.log (animals[2].name) 