// Executa a função Inicio quando a janela é carregada
window.onload = Inicio;

// Declaração de constantes para o caminho das imagens, prefixo e extensão
const caminho = "./imagens/";
const prefix = "img";
const extensao = ".jpeg";

// Variável de controle do índice atual
var cont = 0;

// Variável para armazenar o identificador do temporizador
var temporizador;

// Função para iniciar o carrossel automaticamente
function AutomaticoFoto() {
    // Configura um temporizador para chamar a função Avancar a cada 2 segundos
    temporizador = setInterval(function() {
        Avancar();
    }, 2000);
}

// Array de objetos representando as imagens, títulos e preços
var lista = [
    { img: 1, titulo: "A"},
    { img: 2, titulo: "B"},
    { img: 3, titulo: "C"},
];

// Seleção de elementos do DOM
var botaoVoltar = document.getElementById("btnVoltar");
var botaoAvancar = document.getElementById("btnAvancar");
var moldura = document.getElementById("moldura");

// Função de início
function Inicio() {
    // Associa a função Avancar ao clique do botão Avançar
    botaoAvancar.onclick = Avancar;
    // Associa a função Retornar ao clique do botão Voltar
    botaoVoltar.onclick = Retornar;
    // Atualiza a visualização inicial
    Atualizar();
    // Inicia o carrossel automático
    AutomaticoFoto();
}

// Função para avançar para a próxima imagem
function Avancar() {
    // Incrementa o índice atual
    if (cont < lista.length - 1) {
        cont++;
    } else {
        // Volta para o início se atingir o final da lista
        cont = 0;
    }

    // Atualiza a visualização
    Atualizar();

    // Limpa o temporizador atual
    clearInterval(temporizador);

    // Reinicia o carrossel automático
    AutomaticoFoto();
}

// Função para retornar para a imagem anterior
function Retornar() {
    // Decrementa o índice atual
    if (cont > 0) {
        cont--;
    } else {
        // Vai para o final da lista se estiver na primeira imagem
        cont = lista.length - 1;
    }

    // Atualiza a visualização
    Atualizar();

    // Limpa o temporizador atual
    clearInterval(temporizador);

    // Reinicia o carrossel automático
    AutomaticoFoto();
}

// Função para atualizar a visualização com base no índice atual
function Atualizar() {
    // Verifica se o índice está dentro dos limites do array
    if (cont < lista.length) {
        // Atualiza a imagem, título e preço
        moldura.src = caminho + prefix + lista[cont].img + extensao;
       
    } else {
        // Exibe um erro no console se o índice estiver fora dos limites
        console.error("O Cont é maior que o número de elementos");
    }
}

document.getElementById("btnWhatsapp").addEventListener("click", function() {
    // Número de telefone com código de país (Brasil)
    var numeroWhatsapp = "5548991136817";

    // Construa a URL do WhatsApp
    var urlWhatsapp = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp;

    // Redirecione para a URL do WhatsApp
    window.open(urlWhatsapp, '_blank');
})
