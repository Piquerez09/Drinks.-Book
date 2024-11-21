const categories = {
    "Cóctéis Clássicos": [
        { name: "Martini", ingredients: ["Gin", "Vermute"], instructions: "Misture os ingredientes em um copo misturador e coe para uma taça." },
        { name: "Margarita", ingredients: ["Tequila", "Lima", "Licor de laranja"], instructions: "Misture os ingredientes e sirva com gelo." }
    ],
    "Cóctéis Tropicais": [
        { name: "Piña Colada", ingredients: ["Rum", "Coco", "Ananás"], instructions: "Misture todos os ingredientes no liquidificador." },
        { name: "Mojito", ingredients: ["Rum", "Menta", "Limão", "Açúcar"], instructions: "Misture todos os ingredientes e sirva com gelo." }
    ],
    "Cóctéis Modernos": [
        { name: "Gin Tônica", ingredients: ["Gin", "Água tônica", "Limão"], instructions: "Misture gin com água tônica e adicione limão." },
        { name: "Negroni", ingredients: ["Gin", "Vermute", "Campari"], instructions: "Misture todos os ingredientes e sirva com gelo." }
    ],
    "Bebidas da Itália": [
        { name: "Spritz", ingredients: ["Aperol", "Espumante", "Água com gás"], instructions: "Misture Aperol, espumante e água com gás." },
        { name: "Limoncello", ingredients: ["Limão", "Álcool", "Açúcar"], instructions: "Deixe os limões de molho no álcool, coe e adicione açúcar." }
    ],
};

// Exibir bebidas por categoria
function displayCategory(drinks, category) {
    const categoryList = document.getElementById(`${category}-list`);
    categoryList.innerHTML = '';
    drinks.forEach(drink => {
        const li = document.createElement('li');
        li.textContent = drink.name;
        li.onclick = () => showRecipe(drink, category);
        categoryList.appendChild(li);
    });
}

// Exibir a receita de uma bebida
function showRecipe(drink, category) {
    const categorySection = document.getElementById(category);
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = `
        <h3>${drink.name}</h3>
        <p><strong>Ingredientes:</strong> ${drink.ingredients.join(', ')}</p>
        <p><strong>Instruções:</strong> ${drink.instructions}</p>
        <button onclick="backToCategory('${category}')">← Voltar</button>
    `;
    categorySection.innerHTML = '';
    categorySection.appendChild(recipeDiv);
}

// Voltar para a lista de bebidas
function backToCategory(category) {
    displayCategory(categories[category], category);
}

// Pesquisa de receitas
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

// Formulário de cadastro
function openSignupForm() {
    const formContainer = document.getElementById('signup-form-container');
    formContainer.innerHTML = `
        <div class="signup-form">
            <h3>Cadastro para Compra</h3>
            <input type="email" id="email" placeholder="Digite seu email" required>
            <input type="text" id="cpf" placeholder="Digite seu CPF" required>
            <input type="text" id="cep" placeholder="Digite seu CEP" required>
            <input type="text" id="name" placeholder="Digite seu Nome Completo" required>
            <button onclick="registerUser()">Cadastrar</button>
        </div>
    `;
}

// Cadastro do usuário
function registerUser() {
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const name = document.getElementById('name').value;

    if (email && cpf && cep && name) {
        alert(`Cadastro realizado com sucesso!`);
    } else {
        alert(`Por favor, preencha todos os campos.`);
    }
}

// IA para criar novas receitas
function createRecipe() {
    const input = document.getElementById('ai-input').value;
    const messages = document.getElementById('ai-messages');
    messages.innerHTML += `<p><strong>Você:</strong> ${input}</p>`;
    const response = `Receita criada: ${input}. Agora é só misturar os ingredientes e adicionar as instruções.`;
    messages.innerHTML += `<p><strong>IA:</strong> ${response}</p>`;
    document.getElementById('ai-input').value = '';
}

// Exibir bebidas ao carregar a página
window.onload = function() {
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase());
    });
};
