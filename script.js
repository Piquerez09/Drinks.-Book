// Criador de receitas por IA
const iaForm = document.getElementById('ia-form');
const iaResult = document.getElementById('ia-result');

iaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const occasion = document.getElementById('ia-occasion').value;
    const includes = document.getElementById('ia-includes').value;
    const excludes = document.getElementById('ia-excludes').value;

    iaResult.innerHTML = `
        <h3>Receita Criada:</h3>
        <p>Esta é uma receita perfeita para ${occasion}.</p>
        <p>Inclui: ${includes}</p>
        <p>Não inclui: ${excludes}</p>
    `;
});

// Cadastro
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;

    alert(`Cadastro concluído com sucesso, ${name}!`);
});

// Navegação nas categorias
function loadCategory(categoryName) {
    const categoryItems = {
        Classicos: ['Margarita', 'Martini', 'Old Fashioned'],
        Tropicais: ['Piña Colada', 'Mai Tai', 'Daiquiri'],
        Modernos: ['Espresso Martini', 'Negroni Sbagliato', 'Aperol Spritz'],
        'Italia Drinks': ['Limoncello', 'Negroni', 'Aperol Spritz']
    };

    const categorySection = document.getElementById('categories');
    categorySection.innerHTML = `<h3>${categoryName}</h3>`;
    categoryItems[categoryName].forEach((drink) => {
        const drinkElement = document.createElement('div');
        drinkElement.textContent = drink;
        drinkElement.classList.add('drink-name');
        drinkElement.addEventListener('click', () => showRecipe(drink));
        categorySection.appendChild(drinkElement);
    });
}

function showRecipe(drinkName) {
    const recipes = {
        Margarita: 'Receita de Margarita: Tequila, Cointreau, Limão.',
        Martini: 'Receita de Martini: Gin, Vermouth.',
        // Mais receitas...
    };
    const categorySection = document.getElementById('categories');
    categorySection.innerHTML = `
        <h3>${drinkName}</h3>
        <p>${recipes[drinkName]}</p>
        <button onclick="reloadCategories()">Voltar</button>
    `;
}

function reloadCategories() {
    location.reload();
}
