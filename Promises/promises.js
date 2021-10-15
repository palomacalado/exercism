function mascara(t, mask){
    var i = t.value.length;
    var saida = mask.substring(1,0);
    var texto = mask.substring(i);

    if (texto.substring(0,1) != saida){
        t.value += texto.substring(0,1);
    }
}
   

const buscarCEP = function(evento){
    const pegarCep = document.getElementById('cep').value;
    const requisicao = fetch(`https://viacep.com.br/ws/${pegarCep}/json/
    `);
    evento.preventDefault();

    if (typeof pegarCep === Number) {
        requisicao.then(resposta => resposta.json())
                .then(data =>console.log())
    }
}
//busca lá no html as informações do botão buscar
const botaoBuscar = document.getElementById('buscar');
//busca lá no html as informações do botão buscar
botaoBuscar.addEventListener('click',buscarCEP(event));