// const number = 1;
// const string = 'texto';
// const booleano = true;
// const nullo = null;
// // const undefined;

// // const objeto = {
// //     nome: 'matheus',
// //     idade: 22
// // }

// // objeto.nome = "Linton";

// const soma = 1 + 1;
// const subtracao = 1 -1;
// const multiplicacao = 2 * 1;
// const divisao = 4 / 2;

// const valorConstante = 'constante';

// // const array = [];
// // array.push(20);

// const objeto = {
//     aluno: 'Matheus'
// }

// objeto.aluno = 'Julia';
// console.log(objeto);

// let variavel2 = 'var2'
// function teste() {
//     variavel2 = 'Mudou';
//     teste2(variavel2)
// }

// function teste2(variavel) {
//     variavel2 = 'Mudou';
//     variavel = 'mudou 3'
// }

// teste();
// console.log(variavel2);

// const nulo = '';
// if (nulo) {
//     console.log('true')
// }

// const array = ["String", 13211, true]

// const numeros = [1, 2, 3, 4];
// numeros.push(5);
// console.log(numeros);

// numeros.pop()
// console.log(numeros);

// numeros.map((item)=> {
//     console.log(item);
// })

// const testeFilter = numeros.filter((item)=> item != 2)

// console.log(testeFilter)


// const pessoa = {
//     nome: "Matheus",
//     idade: "22",
//     profissao: "Dev",
//     saudacao() {
//         console.log("Hello Mundo!")
//     }
// }

// console.log(pessoa);
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// pessoa.nome = "Julia";
// console.log(pessoa);

// delete pessoa.profissao;
// console.log(pessoa);

// pessoa.saudacao();

// // for(i = 0;i <= 10; i++) {
// //     console.log(i);
// // }

// // let i = 0;
// // while(i < 10) {
// //     i++;
// //     console.log("while: " + i);
// // }

// // do {
// //     i++
// //     console.log("do-while: " + i);
// // } while(i < 10)

// for(let i = 0;i <= 5; i++) {
//     if(i === 3) {
//         console.log(i);
//         continue;
//     } else if (i === 5) {
//         console.log(i)
//         console.log("Finish");
//         break
//     }
// } 

const pessoas = [
    {
        nome: "Matheus",
        idade: 23,
        profissao: "dev"
    },
    {
        nome: "Julia",
        idade: 19,
        profissao: "designer"
    },
    {
        nome: "Caio",
        idade: 24,
        profissao: "operador"
    },
    {
        nome: "Carlos",
        idade: 21,
        profissao: "fisioterapeuta"
    }
]

// for (let contador = 0; contador < pessoas.length; contador++) {
//     if(pessoas[contador].idade > 22) {
//         console.log("Nome: " + pessoas[contador].nome);
//         console.log("Idade: " + pessoas[contador].idade);
//         console.log("Profissão: " + pessoas[contador].profissao);
//         console.log("-----------------------------------------")
//     }
// }

// pessoas.map((pessoa)=> {
//     if(pessoa.idade > 22) {
//         console.log("Nome: " + pessoa.nome);
//         console.log("Idade: " + pessoa.idade);
//         console.log("Profissão: " + pessoa.profissao);
//         console.log("-----------------------------------------");
//     }
// })

// let PessoasFiltradas = pessoas.filter((pessoa)=> pessoa.idade > 22);
// console.log(PessoasFiltradas)

let PessoasFiltradas = pessoas.filter((pessoa)=> pessoa.nome != "Matheus");
console.log(PessoasFiltradas);