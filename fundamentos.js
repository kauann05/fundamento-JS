// fundamentos
var mainhaVariavel = "ola, mundo!";

console.log(mainhaVariavel);

//variavel e tipos de dados

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

// 'typeof' serve para saber o tipo de variavel

console.log(typeof meuNumero)

//tipos

var booleano = true;
var meuObjeto = {};
var meuAttay = [];
var meuNull = null;
var meuUndeined = undefined;

// let e const
// novas formas de declarar variavel

// *let* variavel que pode mudar de valor
// *const* variavel que nao muda o valor

let x = 10;
const y = 5;

console.log(typeof x)

console.log(x, y);

//operdores aritimetricos

console.log(x + y);
console.log(x - y);
console.log(x * y); //multiplica
console.log(x / y); //dividir

//operadores de comparaçao

console.log(x == y); //igual
console.log(x != y); //diferente

//operadores logicos
// AND &&
// OR ||

// NÃO ENTENDI

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);
console.log(10 < 5 && 20 < 5);


console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);


//conversao de tipos

const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

// estrutura de condicao 
// if , else, else if

const idade = 13;

if (idade < 13) {
    console.log("criança");
} else if (idade < 20) {
    console.log("adolecente")
} else {
    console.log("adulto");
}

// swith - estrutura condicional
// NÃO ENTENDI

const fruta = "banana";

switch (fruta) {
    case "banana":
        console.log("banana é a fruta");
        break;
    case "maça":
        console.log("maça é a fruta");
        break;
        default:
            console.log("fruta não encontrada");
}

//estrutura de repetição
//1,2,3,4,5,6... => depende de uma condiçao

//contador, condição de limite, incremento

//NÃO ENTENDI

for (let i = 0; i < 5; i ++){
    //concatenação
    console.log("o valor de i é:" +i);
}

//while

let k =0;

while (k < 5) {
    console.log("o valor de K:" +k);
    k++;
}

//do while
let j =0;

do {
    console.log("o valor de j é:" + j)

    j++
} while (j < 5);

// funçoes

function cumprimentar(nome){
    console.log("ola," + nome);
}
//chamando a function
cumprimentar ("gk");