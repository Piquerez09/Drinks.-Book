// Função para mostrar a receita ao clicar no nome da bebida
function mostrarReceita(bebida) {
    let receitaText;
    if (bebida === 'margarita') {
        receitaText = 'Receita de Margarita: Tequila, Triple sec, Limão, Sal. Misture e sirva!';
    } else if (bebida === 'mojito') {
        receitaText = 'Receita de Mojito: Rum, Hortelã, Açúcar, Limão, Água com gás.';
    } else if (bebida === 'pinaColada') {
        receitaText = 'Receita de Piña Colada: Rum, Abacaxi, Creme de coco.';
    } else if (bebida === 'caipirinha') {
        receitaText = 'Receita de Caipirinha: Cachaça, Limão, Açúcar.';
    } else if (bebida === 'dryMartini') {
        receitaText = 'Receita de Dry Martini: Gin, Vermute seco.';
    } else if (bebida === 'negroni') {
        receitaText = 'Receita de Negroni: Gin, Vermute rosso, Campari.';
    }

    document.getElementById('receitaText').textContent = receitaText;
    document.getElementById('receita').style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
}

// Função para voltar para a lista de categorias
function voltarCategorias() {
    document.getElementById('receita').style.display = 'none';
}

// Função de cadastro (simulação)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});
