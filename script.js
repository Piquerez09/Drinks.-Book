// Dados das bebidas (continuam os mesmos, sem mudanças)
const categories = {
    "Clássicos": [
        { name: "Martini", ingredients: ["Gin", "Vermute"], instructions: "Misture os ingredientes em um copo misturador e coe para uma taça." },
        { name: "Margarita", ingredients: ["Tequila", "Triple sec", "Suco de limão"], instructions: "Misture todos os ingredientes e sirva com gelo." }
    ],
    "Tropicais": [
        { name: "Caipirinha", ingredients: ["Cachaça", "Limão", "Açúcar"], instructions: "Amasse o limão com o açúcar e adicione a cachaça e gelo." },
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

// Exibe a categoria (igual ao código anterior)
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

// Exibe a receita ao clicar na bebida
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

// Volta para a lista de bebidas da categoria
function backToCategory(category) {
    displayCategory(categories[category], category.toLowerCase());
}

// Função de cadastro
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

// Função para registrar o usuário
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

// Função de redirecionamento para o Google se o usuário clicar em "Não"
function redirectToGoogle() {
    window.location.href = 'https://www.google.com'; // Redireciona para o Google
}

// Função para continuar no site ao clicar em "Sim"
function continueSite() {
    const ageVerificationModal = document.getElementById('age-verification-modal');
    ageVerificationModal.style.display = 'none'; // Fecha o modal

    // Habilita o conteúdo do site após a confirmação de maioridade
    document.body.style.overflow = 'auto'; // Restaura a rolagem do body
}

// Inicializa as categorias após a confirmação de idade
window.onload = function() {
    // Bloqueia o conteúdo até que o usuário tenha confirmado a idade
    document.body.style.overflow = 'hidden';  // Bloqueia rolagem enquanto o modal está ativo
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase());
    });
};
