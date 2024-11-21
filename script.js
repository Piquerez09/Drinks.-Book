// Categorias de Bebidas
const categories = {
    "Cóctéis Clássicos": [
        { name: "Margarita", ingredients: ["Tequila", "Triple Sec", "Lima"], instructions: "Misture os ingredientes e sirva com sal na borda da taça.", occasion: "festa" },
        { name: "Martini", ingredients: ["Gin", "Vermute", "Azeitona"], instructions: "Misture os ingredientes e sirva com gelo.", occasion: "happy-hour" }
    ],
    "Cóctéis Tropicais": [
        { name: "Piña Colada", ingredients: ["Rum", "Coco", "Abacaxi"], instructions: "Bata todos os ingredientes no liquidificador e sirva.", occasion: "relaxar" },
        { name: "Caipirinha", ingredients: ["Cachaça", "Limão", "Açúcar"], instructions: "Macere o limão com o açúcar e adicione a cachaça. Misture bem e sirva com gelo.", occasion: "festa" }
    ],
    "Cóctéis Modernos": [
        { name: "Negroni", ingredients: ["Gin", "Vermute", "Campari"], instructions: "Misture os ingredientes e sirva com gelo.", occasion: "happy-hour" },
        { name: "Espresso Martini", ingredients: ["Vodka", "Café expresso", "Licor de café"], instructions: "Misture os ingredientes em uma coqueteleira e sirva." , occasion: "romance" }
    ],
    "Bebidas da Itália": [
        { name: "Aperol Spritz", ingredients: ["Aperol", "Prosecco", "Água com gás"], instructions: "Misture o Aperol e o Prosecco em uma taça com gelo e adicione a água com gás.", occasion: "relaxar" },
        { name: "Negroni Sbagliato", ingredients: ["Prosecco", "Campari", "Vermute doce"], instructions: "Misture os ingredientes com gelo e sirva.", occasion: "festa" }
    ]
};

// Função para exibir as bebidas de cada categoria
function displayCategory(drinks, category) {
    const categoryList = document.getElementById(`${category}-list`);
    categoryList.innerHTML = '';
    drinks.forEach(drink => {
        const li = document.createElement('li');
        li.textContent = drink.name;
        li.onclick = () => showRecipe(drink);
        categoryList.appendChild(li);
    });
}

// Função para exibir todas as categorias
function displayAllCategories() {
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase().replace(' ', '-'));
    });
}

// Exibir receita completa
function showRecipe(drink) {
    alert(`
        Receita de ${drink.name}:
        Ingredientes: ${drink.ingredients.join(', ')}
        Instruções: ${drink.instructions}
    `);
}

// Função de pesquisa de bebidas
function searchRecipes() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = [];

    Object.keys(categories).forEach(category => {
        categories[category].forEach(drink => {
            if (drink.name.toLowerCase().includes(query) || drink.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))) {
                results.push(drink);
            }
        });
    });

    displaySearchResults(results);
}

// Exibir resultados da pesquisa
function displaySearchResults(results) {
    const searchResultsDiv = document.getElementById('generated-recipes');
    searchResultsDiv.innerHTML = '';

    if (results.length === 0) {
        searchResultsDiv.innerHTML = '<p>Nenhuma bebida encontrada.</p>';
        return;
    }

    results.forEach(drink => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h3>${drink.name}</h3>
            <p><strong>Ingredientes:</strong> ${drink.ingredients.join(', ')}</p>
            <p><strong>Instruções:</strong> ${drink.instructions}</p>
        `;
        searchResultsDiv.appendChild(recipeDiv);
    });
}

// Função para abrir o formulário de cadastro
function openSignupForm() {
    const formContainer = document.getElementById('signup-form-container');
    formContainer.innerHTML = `
        <div class="signup-form">
            <h3>Cadastre-se para comprar</h3>
            <input type="email" id="email" placeholder="Digite seu email" required>
            <button onclick="registerUser()">Cadastrar</button>
        </div>
    `;
}

// Função de cadastro de usuário
function registerUser() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Cadastro realizado com sucesso!`);
    } else {
        alert(`Por favor, insira um email válido.`);
    }
}

// Exibição das categorias ao carregar a página
window.onload = function() {
    displayAllCategories();
};
