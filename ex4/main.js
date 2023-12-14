function clicaBotao() {
    let nome = prompt('Qual é o seu nome?')
    let result = document.getElementById('resultado')
    result.innerHTML = `<p>Olá, <b>${nome}</b>! É um grande prazer te conhecer!`
}