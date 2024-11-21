// Função para alternar entre tema claro e escuro 
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Tema Claro';
    } else {
        themeBtn.textContent = 'Tema Escuro';
    }
}

// Função de redirecionamento para o Google caso o usuário clique em "Não"
function redirectToGoogle() {
    window.location.href = 'https://www.google.com'; // Redireciona para o Google
}

// Função para continuar no site após o clique em "Sim"
function continueSite() {
    const ageVerificationModal = document.getElementById('age-verification-modal');
    // Oculta o modal
    ageVerificationModal.style.display = 'none'; 

    // Permite rolagem no corpo do site
    document.body.style.overflow = 'auto';
}

// Inicializa o modal de verificação de idade
window.onload = function() {
    const ageVerificationModal = document.getElementById('age-verification-modal');
    // Exibe o modal ao carregar a página
    ageVerificationModal.style.display = 'flex';

    // Bloqueia a rolagem do site enquanto o modal estiver visível
    document.body.style.overflow = 'hidden';
};

// Exibição das categorias de bebidas
const categories = {
    "Clássicos": [
        { name: "Margarita", ingredients: ["Tequila", "Triple sec", "Suco de limão"], instructions: "Misture todos os ingredientes e sirva com gelo." },
        { name: "Caipirinha", ingredients: ["Cachaça", "Limão", "Açúcar"], instructions: "Amasse o limão com o açúcar e adicione a cachaça e gelo." }
    ]
};

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

function backToCategory(category) {
    displayCategory(categories[category], category.toLowerCase());
}

// Inicializa as categorias
window.onload = function() {
    // Bloqueia o conteúdo até que o usuário tenha confirmado a idade
    document.body.style.overflow = 'hidden'; // Bloqueia a rolagem enquanto o modal está ativo
    Object.keys(categories).forEach(category => {
        displayCategory(categories[category], category.toLowerCase());
    });
};