let contador = 0;
let contadorElemento = document.getElementById('counter');
let aumentar = document.getElementById('aumentar');
let diminuir = document.getElementById('diminuir');

document.addEventListener('DOMContentLoaded', () => {
    // let contadorElemento = document.getElementById('counter');
    // let clickBotao = document.getElementById('clickBotao');
    

    // clickBotao.addEventListener('click', ()=> {
    //     contador++;
    //     contadorElemento.textContent = contador;
    // })
    
})

function incrementar() {
    contador++;
    contadorElemento.textContent = contador;
}

function decrementar() {
    contador--;
    contadorElemento.textContent = contador;
}