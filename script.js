// Função de cadastro
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cadastro realizado com sucesso!');
});

// Função de navegação nas categorias
function loadCategory(categoryName) {
    const categorySection = document.getElementById('categories');
    categorySection.innerHTML = `<h3>${categoryName}</h3>`;
    
    const drinks = {
        'Classicos': ['Margarita', 'Martini', 'Old Fashioned'],
        'Tropicais': ['Piña Colada', 'Mai Tai', 'Daiquiri'],
        'Modernos': ['Espresso Martini', 'Negroni Sbagliato', 'Aperol Spritz'],
        'Italia Drinks': ['Limoncello', 'Negroni', 'Aperol Spritz']
    };

    drinks[categoryName].forEach(drink => {
        const drinkElement = document.createElement('div');
        drinkElement.textContent = drink;
        drinkElement.classList.add('drink-name');
        drinkElement.addEventListener('click', () => showRecipe(drink));
        categorySection.appendChild(drinkElement);
    });
}

// Função para mostrar a receita
function showRecipe(drinkName) {
    const recipes = {
        'Margarita': 'Receita: Tequila, Cointreau, suco de limão.',
        'Martini': 'Receita: Gin, vermouth.',
        // Adicionar mais receitas...
    };
    document.getElementById('categories').innerHTML = `
        <h3>${drinkName}</h3>
        <p>${recipes[drinkName]}</p>
        <button onclick="reloadCategories()">Voltar</button>
    `;
}

function reloadCategories() {
    location.reload();
}
