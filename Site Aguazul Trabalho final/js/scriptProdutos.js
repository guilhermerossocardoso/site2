// Executa a função Inicio quando a janela é carregada
window.onload = Inicio;

// Declaração de constantes para o caminho das imagens, prefixo e extensão
const caminho = "../imagens/";
const prefix = "img";
const extensao = ".png";

// Variáveis de controle dos índices atuais
var contGuarda = 0;
var contImperatriz = 0;

// Variáveis para armazenar os identificadores dos temporizadores
var temporizadorGuarda;
var temporizadorImperatriz;

// Função para iniciar os carrosséis automaticamente
function AutomaticoFotoGuarda() {
    temporizadorGuarda = setInterval(function() {
        AvancarGuarda();
    }, 2000);
}

function AutomaticoFotoImperatriz() {
    temporizadorImperatriz = setInterval(function() {
        AvancarImperatriz();
    }, 2000);
}

// Arrays de objetos representando as imagens, títulos e preços
var listaGuarda = [
    { img: 10},
    { img: 11},
    { img: 12},
    { img: 13},
    { img: 14},
    { img: 15},
    { img: 16},
    { img: 17},
    { img: 18},
];

var listaImperatriz = [
    { img: 19},
    { img: 20},
    { img: 21},
    { img: 22},
    { img: 23},
    { img: 24},
    { img: 25},
    { img: 26},
    { img: 27},
    { img: 28},
    { img: 29},
    { img: 30},
];

// Seleção de elementos do DOM
var botaoVoltarGuarda = document.getElementById("btnVoltarGuarda");
var botaoAvancarGuarda = document.getElementById("btnAvancarGuarda");
var produtoGuarda = document.getElementById("produtoGuarda");

var botaoVoltarImperatriz = document.getElementById("btnVoltarImperatriz");
var botaoAvancarImperatriz = document.getElementById("btnAvancarImperatriz");
var produtoImperatriz = document.getElementById("produtoImperatriz");

// Função de início
function Inicio() {
    // Associa as funções aos cliques dos botões
    botaoAvancarGuarda.onclick = AvancarGuarda;
    botaoVoltarGuarda.onclick = RetornarGuarda;

    botaoAvancarImperatriz.onclick = AvancarImperatriz;
    botaoVoltarImperatriz.onclick = RetornarImperatriz;

    // Atualiza as visualizações iniciais
    AtualizarGuarda();
    AtualizarImperatriz();

    // Inicia os carrosséis automáticos
    AutomaticoFotoGuarda();
    AutomaticoFotoImperatriz();
}

// Funções para o carrossel de Guarda
function AvancarGuarda() {
    if (contGuarda < listaGuarda.length - 1) {
        contGuarda++;
    } else {
        contGuarda = 0;
    }

    AtualizarGuarda();

    clearInterval(temporizadorGuarda);
    AutomaticoFotoGuarda();
}

function RetornarGuarda() {
    if (contGuarda > 0) {
        contGuarda--;
    } else {
        contGuarda = listaGuarda.length - 1;
    }

    AtualizarGuarda();

    clearInterval(temporizadorGuarda);
    AutomaticoFotoGuarda();
}

function AtualizarGuarda() {
    if (contGuarda < listaGuarda.length) {
        produtoGuarda.src = caminho + prefix + listaGuarda[contGuarda].img + extensao;
    } else {
        console.error("O ContGuarda é maior que o número de elementos");
    }
}

// Funções para o carrossel de Imperatriz
function AvancarImperatriz() {
    if (contImperatriz < listaImperatriz.length - 1) {
        contImperatriz++;
    } else {
        contImperatriz = 0;
    }

    AtualizarImperatriz();

    clearInterval(temporizadorImperatriz);
    AutomaticoFotoImperatriz();
}

function RetornarImperatriz() {
    if (contImperatriz > 0) {
        contImperatriz--;
    } else {
        contImperatriz = listaImperatriz.length - 1;
    }

    AtualizarImperatriz();

    clearInterval(temporizadorImperatriz);
    AutomaticoFotoImperatriz();
}

function AtualizarImperatriz() {
    if (contImperatriz < listaImperatriz.length) {
        produtoImperatriz.src = caminho + prefix + listaImperatriz[contImperatriz].img + extensao;
    } else {
        console.error("O ContImperatriz é maior que o número de elementos");
    }
}
function AtualizarGuarda() {
    if (contGuarda < listaGuarda.length) {
        const path = caminho + prefix + listaGuarda[contGuarda].img + extensao;
        console.log("Caminho da imagem de Guarda:", path);
        produtoGuarda.src = path;
    } else {
        console.error("O ContGuarda é maior que o número de elementos");
    }
}

function AtualizarImperatriz() {
    if (contImperatriz < listaImperatriz.length) {
        const path = caminho + prefix + listaImperatriz[contImperatriz].img + extensao;
        console.log("Caminho da imagem de Imperatriz:", path);
        produtoImperatriz.src = path;
    } else {
        console.error("O ContImperatriz é maior que o número de elementos");
    }
}

// Substitua o texto dos botões por caracteres de flecha Unicode
botaoVoltarGuarda.innerHTML = "&#9664;"; // seta para a esquerda
botaoAvancarGuarda.innerHTML = "&#9654;"; // seta para a direita

botaoVoltarImperatriz.innerHTML = "&#9664;"; // seta para a esquerda
botaoAvancarImperatriz.innerHTML = "&#9654;"; // seta para a direita

document.getElementById("btnWhatsapp").addEventListener("click", function() {
    // Número de telefone com código de país (Brasil)
    var numeroWhatsapp = "5548991136817";

    // Construa a URL do WhatsApp
    var urlWhatsapp = "https://api.whatsapp.com/send?phone=" + numeroWhatsapp;

    // Redirecione para a URL do WhatsApp
    window.open(urlWhatsapp, '_blank');
})
