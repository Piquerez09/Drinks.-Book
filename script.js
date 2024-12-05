// Função de verificação de idade
function verifyAge(isAdult) {
  const overlay = document.getElementById("age-verification-overlay");
  if (isAdult) {
      overlay.style.display = "none";
  } else {
      window.location.href = "https://www.google.com";
  }
}

// Função para mostrar a receita detalhada
function showRecipe(drink) {
  const recipes = document.querySelectorAll('.recipe-details');
  recipes.forEach(recipe => recipe.style.display = 'none'); // Esconde todas as receitas
  document.getElementById(drink).style.display = 'block'; // Exibe a receita clicada
}

// Funções para mostrar e fechar o modal de login/criação
function showLogin() {
  document.getElementById("login-modal").style.display = "flex";
  document.getElementById("create-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}

function showCreateAccount() {
  document.getElementById("login-modal").style.display = "flex";
  document.getElementById("create-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function closeLogin() {
  document.getElementById("login-modal").style.display = "none";
}

// Função de Login (simulação com localStorage)
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
      alert('Login bem-sucedido!');
      closeLogin();
  } else {
      alert('Email ou senha incorretos.');
  }
});

// Função de Criação de Conta
document.getElementById('create-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('create-email').value;
  const password = document.getElementById('create-password').value;
  const cep = document.getElementById('create-cep').value;

  if (!email || !password || !cep) {
      alert('Todos os campos são obrigatórios!');
      return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ email, password, cep });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Conta criada com sucesso!');
  closeLogin();
});