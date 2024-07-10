const number = 1;
const string = 'texto';
const booleano = true;
const nullo = null;
// const undefined;

// const objeto = {
//     nome: 'matheus',
//     idade: 22
// }

// objeto.nome = "Linton";

const soma = 1 + 1;
const subtracao = 1 -1;
const multiplicacao = 2 * 1;
const divisao = 4 / 2;

const valorConstante = 'constante';

const array = [];
array.push(20);

const objeto = {
    aluno: 'Matheus'
}

objeto.aluno = 'Julia';
console.log(objeto);

let variavel2 = 'var2'
function teste() {
    variavel2 = 'Mudou';
    teste2(variavel2)
}

function teste2(variavel) {
    variavel2 = 'Mudou';
    variavel = 'mudou 3'
}

teste();
console.log(variavel2);

const nulo = '';
if (nulo) {
    console.log('true')
}