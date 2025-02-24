let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto; 

}

function exibirMensagemInical() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1-10');
}

exibirMensagemInical()

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) 
    {
        exibirTextoNaTela('h1', 'ACERTOU!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;

        exibirTextoNaTela('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) 
        {
            exibirTextoNaTela('p', 'O numero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
         
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido))
     {
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
     }


}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo() {
    exibirMensagemInical()
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1
    document.getElementById('reiniciar').setAttribute('disabled', true);
}