let mensagem = document.querySelector('#mensagem');

function exibirMensagem() {
  let nome = prompt('Qual é o seu nome?');
  mensagem.textContent = `Bem-vindo(a), ${nome}!`;
}

exibirMensagem();
