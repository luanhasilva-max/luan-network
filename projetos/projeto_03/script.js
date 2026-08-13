const frases = [
    "Você consegue!",
    "Acredite em você!",
    "Não desista!",
    "Cada passo importa.",
    "Continue avançando!",
    "Seja sua melhor versão.",
    "O esforço vale a pena.",
    "Transforme desafios em oportunidades.",
    "Grandes conquistas começam com pequenos passos.",
    "Seu potencial é maior do que você imagina."
];

const fraseTexto = document.querySelector(".frase");
const btnFrase = document.querySelector(".btnFrase");

function mostrarFrase() {
    let indice = Math.floor(Math.random() * frases.length)
  fraseTexto.textContent = frases[indice]
}

btnFrase.addEventListener("click", function () {
    mostrarFrase();
});
