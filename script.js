// Função para alternar o modo escuro e claro
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    let themeButton = document.getElementById('toggle-theme');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Modo Claro';
    } else {
        themeButton.textContent = 'Modo Escuro';
    }
});

// Função de verificação de idade
document.getElementById('age-yes').addEventListener('click', function() {
    document.getElementById('age-verification').style.display = 'none';
});

document.getElementById('age-no').addEventListener('click', function() {
    window.location.href = 'https://www.google.com'; // Redirecionar para uma página caso a resposta seja negativa
});

// Gerar receita com base nos ingredientes
document.getElementById('generate-recipe').addEventListener('click', function() {
    let ingredients = document.getElementById('ingredients').value;
    let exclude = document.getElementById('exclude').value;
    let occasion = document.getElementById('occasion').value;
    
    let recipeDisplay = document.getElementById('recipe-result');
    recipeDisplay.innerHTML = `
        <h3>Receita Gerada</h3>
        <p><strong>Ingredientes:</strong> ${ingredients}</p>
        <p><strong>Ingredientes a Excluir:</strong> ${exclude}</p>
        <p><strong>Ocasião:</strong> ${occasion}</p>
        <p><strong>Modo de Preparo:</strong> Misture tudo em uma coqueteleira com gelo e sirva em copo gelado.</p>
    `;
});

// Exibir receita de bebida da Itália
document.querySelectorAll('.drink-name').forEach(button => {
    button.addEventListener('click', function() {
        let recipeName = this.getAttribute('data-recipe');
        let recipeDetails = document.getElementById('recipe-details');
        let backButton = document.getElementById('back-to-list');

        // Exemplo de receita
        let recipe = {
            'Aperol Spritz': 'Aperol, Prosecco e água com gás.',
            'Negroni': 'Gin, Vermute Rosso e Campari.',
            'Bellini': 'Prosecco e purê de pêssego.'
        };

        recipeDetails.innerHTML = `<h3>${recipeName}</h3><p>${recipe[recipeName]}</p>`;
        document.getElementById('recipe-display').style.display = 'block';
        backButton.style.display = 'inline-block';
    });
});

// Voltar para a lista de bebidas
document.getElementById('back-to-list').addEventListener('click', function() {
    document.getElementById('recipe-display').style.display = 'none';
    document.getElementById('back-to-list').style.display = 'none';
});
