/*<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo de Bebidas</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <div class="logo">Catálogo de Bebidas</div>
    <nav>
        <a href="#clássicos">Clássicos</a>
        <a href="#tropicais">Tropicais</a>
        <a href="#modernos">Modernos</a>
        <a href="#italia">Bebidas da Itália</a>
        <a href="#shop">Loja</a>
    </nav>
</header>

<!-- Formulário de Cadastro no topo -->
<div id="signup-section">
    <button class="shop-btn" onclick="openSignupForm()">Cadastrar-se para Comprar</button>
    <div id="signup-form-container"></div>
</div>

<!-- Pesquisa -->
<div id="search-section">
    <input type="text" id="search" placeholder="Pesquisar bebidas...">
    <button id="search-btn" onclick="searchRecipes()">Pesquisar</button>
</div>

<!-- Exibição de Categorias -->
<div id="categories">
    <div id="clássicos" class="category">
        <h2>Cóctéis Clássicos</h2>
        <ul id="clássicos-list"></ul>
    </div>

    <div id="tropicais" class="category">
        <h2>Cóctéis Tropicais</h2>
        <ul id="tropicais-list"></ul>
    </div>

    <div id="modernos" class="category">
        <h2>Cóctéis Modernos</h2>
        <ul id="modernos-list"></ul>
    </div>

    <div id="italia" class="category">
        <h2>Bebidas da Itália</h2>
        <ul id="italia-list"></ul>
    </div>
</div>

<!-- IA -->
<div id="ai-container">
    <div id="ai-window">
        <div id="ai-messages"></div>
        <input type="text" id="ai-input" placeholder="Digite o que você deseja (ingredientes, ocasião, etc.)..." onkeyup="checkInput(event)">
        <button onclick="createRecipe()">Criar Receita</button>
    </div>
</div>

<!-- Rodapé -->
<footer>
    <p>&copy; 2024 Catálogo de Bebidas. Todos os direitos reservados.</p>
</footer>

<script src="scripts.js"></script>
</body>
</html>                                                                                                                                                           /* Estilos gerais */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    color: #333;
}

header {
    background-color: #2a2a2a;
    padding: 20px;
    text-align: center;
    color: white;
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 2px;
}

nav {
    background-color: #333;
    color: white;
    padding: 15px 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
}

nav a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
}

nav a:hover {
    text-decoration: underline;
}

#signup-section {
    padding: 20px;
    text-align: center;
}

#search-section {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f0f0f0;
}

#search {
    padding: 10px;
    width: 300px;
    font-size: 1.1em;
}

#search-btn {
    padding: 10px;
    background-color: #333;
    color: white;
    cursor: pointer;
    border: none;
    font-size: 1.1em;
}

#search-btn:hover {
    background-color: #555;
}

.category {
    padding: 20px;
    margin: 20px 0;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category h2 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
}

.category ul {
    list-style-type: none;
    padding: 0;
}

.category li {
    font-size: 1.2em;
    margin-bottom: 10px;
    cursor: pointer;
    color: #333;
}

.category li:hover {
    color: #007BFF;
}

#ai-container {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    border-radius: 8px;
    display: none;
}

#ai-window {
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
}

#ai-messages {
    padding: 10px;
    font-size: 1.1em;
    max-height: 300px;
    overflow-y: auto;
}

#ai-input {
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

footer {
    background-color: #2a2a2a;
    color: white;
    text-align: center;
    padding: 20px;
    position: relative;
    bottom: 0;
    width: 100%;
}

footer a {
    color: white;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}
// Dados das bebidas
const categories = {
    "Clássicos": [
        { name: "Martini", ingredients: ["Gin", "Vermute"], instructions: "Misture os ingredientes em um copo misturador e coe para uma taça." },
        { name: "Margarita", ingredients: ["Tequila", "Lima", "Licor de laranja"], instructions: "Misture os ingredientes e sirva com gelo." }
    ],
    "Tropicais": [
        { name: "Piña Colada", ingredients: ["Rum", "Coco", "Ananás"], instructions: "Misture todos os ingredientes no liquidificador." },
        { name: "Mojito", ingredients: ["Rum", "Menta", "Limão", "Açúcar"], instructions: "Misture todos os ingredientes e sirva com gelo." }
    ],
    "Modernos": [
        { name: "Gin Tônica", ingredients: ["Gin", "Água tônica", "Limão"], instructions: "Misture gin com água tônica e adicione limão." },
        { name: "Negroni", ingredients: ["Gin", "Vermute", "Campari"], instructions: "Misture todos os ingredientes e sirva com gelo." }
    ],
    "Bebidas da Itália": [
        { name: "Spritz", ingredients: ["Aperol", "Espumante", "Água com gás"], instructions: "Misture Aperol, espumante e água com gás." },
        { name: "Limoncello", ingredients: ["Limão", "Álcool", "Açúcar"], instructions: "Deixe os limões de molho no álcool, coe e adicione açúcar." }
    ]
};

// Exibe as bebidas da categoria
function displayCategory(drinks, category) {
    const categoryList = document.getElementById(${category}-list);
    categoryList.innerHTML = '';
    drinks.forEach(drink => {
        const li = document.createElement('li');
        li.textContent = drink.name;
        li.onclick = () => showRecipe(drink, category);
        categoryList.appendChild(li);
    });
}

// Exibe a receita ao clicar na bebida
function showRecipe(drink, category) {
    const categorySection = document.getElementById(category);
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');
    recipeDiv.innerHTML = 
        <h3>${drink.name}</h3>
        <p><strong>Ingredientes:</strong> ${drink.ingredients.join(', ')}</p>
        <p><strong>Instruções:</strong> ${drink.instructions}</p>
        <button onclick="backToCategory('${category}')">← Voltar</button>
    ;
    categorySection.innerHTML = '';
    categorySection.appendChild(recipeDiv);
}

// Volta para a lista de bebidas da categoria
function backToCategory(category) {
    displayCategory(categories[category], category.toLowerCase());
}

// Função de busca
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

// Exibe os resultados da pesquisa
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
        recipeDiv.innerHTML = 
            <h3>${drink.name}</h3>
            <p><strong>Ingredientes:</strong> ${drink.ingredients.join(', ')}</p>
            <p><strong>Instruções:</strong> ${drink.instructions}</p>
        ;
        searchResultsDiv.appendChild(recipeDiv);
    });
}

// Função de cadastro
function openSignupForm() {
    const formContainer = document.getElementById('signup-form-container');
    formContainer.innerHTML = 
        <div class="signup-form">
            <h3>Cadastro para Compra</h3>
            <input type="email" id="email" placeholder="Digite seu email" required>
            <input type="text" id="cpf" placeholder="Digite seu CPF" required>
            <input type="text" id="cep" placeholder="Digite seu CEP" required>
            <input type="text" id="name" placeholder="Digite seu Nome Completo" required>
            <button onclick="registerUser()">Cadastrar</button>
        </div>
    ;
}

// Função para registrar o usuário
function registerUser() {
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const cep = document.getElementById('cep').value;
    const name = document.getElementById('name').value;

    if (email && cpf && cep && name) {
        alert(Cadastro realizado com sucesso!);
    } else {
        alert(Por favor, preencha todos os campos.);
    }
}

// Função para criar uma nova receita
function createRecipe() {
    const input = document.getElementById('ai-input').value;
    const messages = document.getElementById('ai-messages');
    messages.innerHTML += <p><strong>Você:</strong> ${input}</p>;
    const response = Receita criada: ${input}. Agora é só misturar os ingredientes e adicionar as instruções.;
    messages.innerHTML += <p><strong>IA:</strong> ${response}</p>;
    document.getElementById('ai-input').value = '';
    document.getElementById('ai-container').style.display = 'block';
}

// Inicializa as categorias
window.onload = function() {
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase());
    });
};
preciso q vc coloque uma programaçao q pergunte se a pessoa tem 18 anos e um botao de sim e um de nao ao clicar no sim vc continua no site se vc clicar no nao direciona para o google td isso de forma sobre posta ao site */