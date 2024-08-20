const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual marca te agrada mais??",
        alternativas: [
            {
                texto: "Toyota",
                afirmacao: "Se você usa Toyota você geralmente valoriza a confiabilidade e a eficiência prática em seus veículos."
            },
            {
                texto: "Honda",
                afirmacao: "Se você usa Honda tende a buscar inovação e um equilíbrio entre desempenho e economia, com uma abordagem prática e confiável."
            }
        ]
    },
    {
        enunciado: "Você prefere café quente ou café gelado?",
        alternativas: [
            {
                texto: "Quente",
                afirmacao: "Se você é uma pessoa que toma café quente você é normal"
            },
            {
                texto: "Gelado",
                afirmacao: "Se você toma café gelado você é uma pessoa que precisa de internamento no CAPS"
            }
        ]
    },
    {
        enunciado: "Você prefgere praia ou piscina?",
        alternativas: [
            {
                texto: "Praia",
                afirmacao: "Você gosta de se socializar, da dimensão do mar, pézinho na areia"
            },
            {
                texto: "Piscina",
                afirmacao: "Você gosta de privacidade, juntamente com os amigos, e não gosta de areia"
            }
        ]
    },
    {
        enunciado: "Música ao vivo ou gravada??",
        alternativas: [
            {
                texto: "Ao vivo",
                afirmacao: "Gosta de desfrutar do momento, vendo tudo ao olho nu, vibrando junto com o cantor(a), sabe aproveitar a vida"
            },
            {
                texto: "Gravada",
                afirmacao: "Você gosta de ler as letras da legenda, ter sua privacidade e não precisar se socializar"
            }
        ]
    },
    {
        enunciado: "Cachorro ou gato?",
        alternativas: [
            {
                texto: "Cachorro",
                afirmacao: "Você gosta do caos diario, ter um bom companheiro, que te proporciona muito amor e muita raiva ao mesmo tempo"
            },
            {
                texto: "Gato",
                afirmacao: "Você já gosta de um animal mais tranquilo, que não precisa de muito contato fisíco, ele lá e você aqui"
            }
        ]
    },
];

//Declaração de variáveis
let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "Com base nas suas respostas: "; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.
