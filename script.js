let cart = [];
let total = 0;

// Função para mostrar a receita da bebida
function showRecipe(drink) {
    const recipes = {
        Mojito: "Ingredientes: Rum, hortelã, açúcar, limão e soda. Modo de preparo: Misture todos os ingredientes...",
        Caipirinha: "Ingredientes: Cachaça, limão, açúcar e gelo. Modo de preparo: Amasse o limão com o açúcar...",
        'Piña Colada': "Ingredientes: Rum, leite de coco, abacaxi. Modo de preparo: Misture tudo no liquidificador...",
        'Vinho Tinto': "O vinho tinto é servido gelado ou à temperatura ambiente. Serve bem com carnes vermelhas...",
        'Vinho Branco': "Vinho branco é servido gelado. É uma ótima opção para pratos leves como frutos do mar...",
        Whisky: "Whisky Escocês é um destilado premium, geralmente consumido puro ou em drinks como 'Old Fashioned'...",
        Rum: "O rum é uma base comum em coquetéis tropicais, sendo versátil em várias combinações..."
    };

    document.getElementById("recipe-text").textContent = recipes[drink];
    document.getElementById("recipe-popup").style.display = "block";
}

// Função para fechar o pop-up da receita
function closeRecipe() {
    document.getElementById("recipe-popup").style.display = "none";
}

// Função para minimizar a receita
function minimizeRecipe() {
    document.getElementById("recipe-popup").style.display = "none";
}

// Função para adicionar ao carrinho
function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length > 0) {
        cartItems.innerHTML = cart.map(item => `<p>${item.product} - R$ ${item.price}</p>`).join('');
        cartTotal.innerHTML = `<p>Total: R$ ${total.toFixed(2)}</p>`;
    } else {
        cartItems.innerHTML = '<p>Seu carrinho está vazio</p>';
        cartTotal.innerHTML = '<p>Total: R$ 0,00</p>';
    }
}

// Função para finalizar a compra
function checkout() {
    if (cart.length > 0) {
        alert('Compra finalizada com sucesso!');
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert('Seu carrinho está vazio!');
    }
}

// Verificação de Idade
document.getElementById('age-yes').addEventListener('click', () => {
    document.getElementById('age-verification').classList.remove('show');
});

document.getElementById('age-no').addEventListener('click', () => {
    window.location.href = 'https://www.google.com';
});

window.onload = () => {
    document.getElementById('age-verification').classList.add('show');
};
