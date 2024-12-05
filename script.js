// Função para exibir a receita da bebida
function showRecipe(drink) {
  const recipes = {
      Mojito: "Ingredientes: Rum, hortelã, açúcar, limão e soda. Modo de preparo: Misture os ingredientes...",
      Caipirinha: "Ingredientes: Cachaça, limão, açúcar e gelo. Modo de preparo: Amasse o limão com o açúcar...",
      'Vinho Tinto': "O vinho tinto é servido gelado ou à temperatura ambiente. Serve bem com carnes vermelhas...",
      Whisky: "Whisky Escocês é um destilado premium, geralmente consumido puro ou em drinks como o 'Old Fashioned'...",
  };

  document.getElementById("recipe-text").textContent = recipes[drink];
  document.getElementById("recipe-popup").style.display = "block";
}

// Fechar o pop-up da receita
function closeRecipe() {
  document.getElementById("recipe-popup").style.display = "none";
}

// Funções de verificação de idade
document.getElementById('age-yes').addEventListener('click', () => {
  document.getElementById('age-verification').classList.remove('show');
});

document.getElementById('age-no').addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

// Mostrar o modal de verificação de idade ao carregar o site
window.onload = () => {
  document.getElementById('age-verification').classList.add('show');
};

// Função para adicionar produtos ao carrinho
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  updateCart();
}

// Atualizar a exibição do carrinho
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.length > 0 ? cart.map(item => `<p>${item.product} - R$ ${item.price}</p>`).join('') : '<p>Seu carrinho está vazio</p>';
}

// Finalizar compra
function checkout() {
  if (cart.length > 0) {
      alert('Compra finalizada com sucesso!');
      cart = [];
      updateCart();
  } else {
      alert('Seu carrinho está vazio!');
  }
}
