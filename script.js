// Função para exibir a receita de uma bebida
function showRecipe(drink) {
  const recipes = {
      Mojito: 'Ingredientes: Rum, hortelã, açúcar, limão e soda. Modo de preparo: Misture os ingredientes...',
      Caipirinha: 'Ingredientes: Cachaça, limão, açúcar e gelo. Modo de preparo: Amasse o limão com o açúcar...',
      // Adicione outras receitas aqui
  };

  document.getElementById('recipe-text').textContent = recipes[drink];
  document.getElementById('recipe').style.display = 'block';
}

// Função para fechar a receita
function closeRecipe() {
  document.getElementById('recipe').style.display = 'none';
}

// Funções para verificação de idade
document.getElementById('age-yes').addEventListener('click', () => {
  document.getElementById('age-verification').classList.remove('show');
});

document.getElementById('age-no').addEventListener('click', () => {
  window.location.href = 'https://www.google.com';
});

// Exibir a tela de verificação de idade ao carregar o site
window.onload = () => {
  document.getElementById('age-verification').classList.add('show');
};
