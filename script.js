async function buscaEndereco(cep){
var mensagemErro = document.getElementById ('erro');
mensagemErro.innerHTML = "";
try{
   var consultaCEP = await fetch ('https://viacep.com.br/ws/${cep}/json/');
   var consultaConvertida = await consultaCEP.json();

if (consultaConvertida.erro){
    throw Error('Cep inválido');
    
}

const bairro = document.getElementById ('bairro');
const complemento = doment.getElementById('complemento');
const cidade = document.getElementById('cidade');
const endereco = document.getElementById('endereco');

bairro.value = consultaConvertida.bairro;
complemento.value = consultaConvertida;
cidade.value = consultaConvertida.localidade;
endereco.value = consultaConvertida.logradouro;

return consultaConvertida;

}
catch(erro) {
    mensagemErro.innerHTML= '<p>cep nao existente</p>'
}

console.log(consultaConvertida);

}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));