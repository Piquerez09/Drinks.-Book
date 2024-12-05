// Função para verificar idade
function verifyAge(isAdult) {
  if (isAdult) {
      document.getElementById('age-verification-overlay').style.display = 'none';
  } else {
      window.location.href = "https://www.google.com"; // Redireciona se não tiver 18 anos
  }
}

// Mostrar a receita detalhada de cada bebida
function showRecipe(id) {
  const recipes = document.querySelectorAll('.recipe-details');
  recipes.forEach(recipe => recipe.style.display = 'none');
  
  const recipe = document.getElementById(id);
  if (recipe) {
      recipe.style.display = 'block';
  }
}

// Modal de login e criação de conta
function showLogin() {
  document.getElementById('login-modal').style.display = 'block';
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('create-form').style.display = 'none';
}

function showCreateAccount() {
  document.getElementById('login-modal').style.display = 'block';
  document.getElementById('create-form').style.display = 'block';
  document.getElementById('login-form').style.display = 'none';
}

function closeLogin() {
  document.getElementById('login-modal').style.display = 'none';
}

// Função de login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
      alert('Login bem-sucedido!');
      document.getElementById("login-link").style.display = "none";
      document.getElementById("create-link").style.display = "none";
      document.getElementById("user-info").style.display = "block";
      document.getElementById("user-initials").textContent = user.initials || email[0].toUpperCase();
      closeLogin();
  } else {
      alert('Email ou senha incorretos.');
  }
});

// Criação de conta
document.getElementById('create-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('create-email').value;
  const password = document.getElementById('create-password').value;
  const cep = document.getElementById('create-cep').value;
  const initials = document.getElementById('create-initials').value.toUpperCase();

  if (!email || !password || !cep || !initials) {
      alert('Todos os campos são obrigatórios!');
      return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ email, password, cep, initials });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Conta criada com sucesso!');
  closeLogin();
});

