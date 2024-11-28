// Função de Pesquisa
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    if (!query) {
        alert('Digite algo para pesquisar!');
        return;
    }
    alert(`Você pesquisou por: ${query}`);
});

// Navegação por Categorias
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        alert(`Você selecionou a categoria: ${category}`);
        // Aqui você pode redirecionar ou carregar receitas específicas
    });
});
// Função de Pesquisa
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    if (!query) {
        alert('Digite algo para pesquisar!');
        return;
    }
    alert(`Você pesquisou por: ${query}`);
});

// Navegação por Categorias
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        alert(`Você selecionou a categoria: ${category}`);
        // Aqui você pode redirecionar ou carregar receitas específicas
    });
});

// Dados de exemplo de bebidas e receitas
const drinks = {
    clássicos: [
        { name: "Margarita", recipe: "Tequila, suco de limão, licor de laranja e gelo." },
        { name: "Old Fashioned", recipe: "Uísque, açúcar, angostura e gelo." },
    ],
    tropicais: [
        { name: "Piña Colada", recipe: "Rum, leite de coco, suco de abacaxi e gelo." },
        { name: "Mai Tai", recipe: "Rum branco, rum escuro, suco de limão, xarope de amêndoa e Curaçao laranja." },
    ],
    modernos: [
        { name: "Espresso Martini", recipe: "Vodka, café espresso, licor de café e açúcar." },
        { name: "Gin Basil Smash", recipe: "Gin, suco de limão, manjericão fresco e açúcar." },
    ],
    italia: [
        { name: "Aperol Spritz", recipe: "Aperol, prosecco, água com gás e laranja." },
        { name: "Negroni", recipe: "Gin, vermute tinto e Campari." },
    ],
};

// Mostrar lista de bebidas ao clicar em uma categoria
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        const categoryTitle = item.querySelector('h3').innerText;
        const drinkList = drinks[category];

        // Atualiza a seção de receitas
        const recipeSection = document.getElementById('recipe-section');
        const categoryTitleElement = document.getElementById('category-title');
        const drinkListElement = document.getElementById('drink-list');
        const recipeDetails = document.getElementById('recipe-details');

        categoryTitleElement.innerText = categoryTitle;
        drinkListElement.innerHTML = '';
        recipeDetails.classList.add('hidden');

        drinkList.forEach(drink => {
            const listItem = document.createElement('li');
            listItem.innerText = drink.name;
            listItem.addEventListener('click', () => {
                document.getElementById('drink-title').innerText = drink.name;
                document.getElementById('drink-recipe').innerText = drink.recipe;
                recipeDetails.classList.remove('hidden');
            });
            drinkListElement.appendChild(listItem);
        });

        recipeSection.classList.remove('hidden');
        window.scrollTo({ top: recipeSection.offsetTop, behavior: 'smooth' });
    });
});
