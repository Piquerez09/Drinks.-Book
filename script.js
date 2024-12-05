// Função para verificar a idade do usuário
function verifyAge(isAdult) {
  const overlay = document.getElementById("age-verification-overlay");
  if (isAdult) {
      overlay.style.display = "none";
  } else {
      window.location.href = "https://www.google.com";
  }
}

// Função para exibir a receita detalhada
function showRecipe(drink) {
  const recipes = document.querySelectorAll('.recipe-details');
  recipes.forEach(recipe => recipe.style.display = 'none'); // Esconde todas as receitas
  document.getElementById(drink).style.display = 'block'; // Exibe a receita clicada
}

// Função simples de login (sem backend, apenas demonstração)
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
      alert('Login bem-sucedido!');
  } else {
      alert('Por favor, preencha todos os campos.');
  }
});
