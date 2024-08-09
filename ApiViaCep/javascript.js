document.addEventListener('DOMContentLoaded', ()=> {
    let formulario = document.getElementById('form');
    let resultado = document.getElementById('resultado');

    formulario.addEventListener('submit', (event)=> {
        event.preventDefault();
        
        let dados;
        let cep = document.getElementById("cep");
        const cepUpdated = cep.value.replace(/\D/g, '')
        if (cep.length === 0) {
            alert('Insira o Cep');
            return
        }

        let endereco ='https://viacep.com.br/ws/'+ cepUpdated +'/json/'
        fetch(endereco)
            .then(response => {
                if (response.error) {
                   alert('Cep não existe!')
                   cep = "";
                   return;
                }
            
                dados = response.json();
                return dados;
            })
            .then(data => {
                resultado.style.padding = '15px';
                resultado.innerHTML = `
                <h2>Resultado</h2>
                <hr>
                <p><strong>CEP: </strong>${data.cep}</p>
                <p><strong>Logradouro: </strong>${data.logradouro}</p>
                <p><strong>Bairro: </strong>${data.bairro}</p>
                <p><strong>UF: </strong>${data.uf}</p>
                <p><strong>Localidade: </strong>${data.localidade}</p>
            `
              })

        formulario.reset();     
    })
})

// {
//     "cep": "69037-042",
//     "logradouro": "Rua Raimundo Nonato de Castro",
//     "complemento": "",
//     "unidade": "",
//     "bairro": "Ponta Negra",
//     "localidade": "Manaus",
//     "uf": "AM",
//     "ibge": "1302603",
//     "gia": "",
//     "ddd": "92",
//     "siafi": "0255"
// }