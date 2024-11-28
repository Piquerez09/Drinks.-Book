// Dados de bebidas
const drinks = {
    clássicos: [
        { name: "Margarita", recipe: "Tequila, suco de limão, licor de laranja e gelo." },
        { name: "Old Fashioned", recipe: "Uísque, açúcar, angostura e gelo." }
    ],
    tropicais: [
        { name: "Piña Colada", recipe: "Rum, leite de coco, suco de abacaxi e gelo." },
        { name: "Mai Tai", recipe: "Rum branco, rum escuro, suco de limão, xarope de amêndoa." }
    ],
    modernos: [
        { name: "Espresso Martini", recipe: "Vodka, café espresso, licor de café e açúcar." },
        { name: "Gin Basil Smash", recipe: "Gin, suco de limão, manjericão e açúcar." }
    ],
    italia: [
        { name: "Aperol Spritz", recipe: "Aperol, prosecco, água com gás e laranja." },
        { name: "Negroni", recipe: "Gin, vermute tinto e Campari." }
    ]
};

// Exibe lista de bebidas ao clicar
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        const drinkList = drinks[category];
        const drinkListElement = document.getElementById('drink-list');
        const recipeDetails = document.getElementById('recipe-details');

        document.getElementById('category-title').innerText = category.toUpperCase();
        drinkListElement.innerHTML = '';
        recipeDetails.classList.add('hidden');

        drinkList.forEach(drink => {
            const li = document.createElement('li');
            li.innerText = drink.name;
            li.addEventListener('click', () => {
                document.getElementById('drink-title').innerText = drink.name;
                document.getElementById('drink-recipe').innerText = drink.recipe;
                recipeDetails.classList.remove('hidden');
            });
            drinkListElement.appendChild(li);
        });

        document.getElementById('recipe-section').classList.remove('hidden');
        window.scrollTo({ top: document.getElementById('recipe-section').offsetTop, behavior: 'smooth' });
    });
});
