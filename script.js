// Categorias de Bebidas
const categories = {
    "Cóctéis Clássicos": [
        { name: "Margarita", ingredients: ["Tequila", "Triple Sec", "Lima"], instructions: "Misture os ingredientes e sirva com sal na borda da taça." },
        { name: "Martini", ingredients: ["Gin", "Vermute", "Azeitona"], instructions: "Misture os ingredientes e sirva com azeitona." },
    ],
    "Cóctéis Tropicais": [
        { name: "Piña Colada", ingredients: ["Rum", "Coco", "Ananás"], instructions: "Misture todos os ingredientes no liquidificador." },
        { name: "Mojito", ingredients: ["Rum", "Menta", "Limão", "Açúcar"], instructions: "Misture todos os ingredientes e sirva com gelo." },
    ],
    "Cóctéis Modernos": [
        { name: "Gin Tônica", ingredients: ["Gin", "Água tônica", "Limão"], instructions: "Misture gin com água tônica e adicione limão." },
        { name: "Negroni", ingredients: ["Gin", "Vermute", "Campari"], instructions: "Misture todos os ingredientes e sirva com gelo." },
    ],
    "Bebidas da Itália": [
        { name: "Spritz", ingredients: ["Aperol", "Espumante", "Água com gás"], instructions: "Misture Aperol, espumante e água com gás." },
        { name: "Limoncello", ingredients: ["Limão", "Álcool", "Açúcar"], instructions: "Deixe os limões de molho no álcool, coe e adicione açúcar." },
    ],
};

// Função para exibir a lista de bebidas de cada categoria
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

// Exibir a receita ao clicar
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

// Voltar para os nomes das bebidas
function backToCategory(category) {
    displayCategory(categories[category], category);
}

// Função de pesquisa
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

// Exibir resultados de pesquisa
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

// Cadastro de usuário
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

// Realiza o cadastro do usuário
function registerUser() {
    const email = document.getElementById('email').value;
    if (email) {
        alert(`Cadastro realizado com sucesso!`);
    } else {
        alert(`Por favor, insira um email válido.`);
    }
}

// Exibir as categorias ao carregar a página
window.onload = function() {
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase());
    });
};

// Funcionalidade da IA
function askAI() {
    const input = document.getElementById('ai-input').value;
    const messages = document.getElementById('ai-messages');
    messages.innerHTML += `<p><strong>Você:</strong> ${input}</p>`;
    const response = `Eu sou a IA. Você perguntou sobre ${input}. Aqui está a resposta: [Informações da bebida].`;
    messages.innerHTML += `<p><strong>IA:</strong> ${response}</p>`;
    document.getElementById('ai-input').value = '';
}
