// Login/Cadastro funcionalidade
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    if (!usuarios.find(u => u.email === email)) {
        usuarios.push({ email, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        alert('Cadastro realizado com sucesso!');
    } else {
        alert('Usuário já existe!');
    }
});

document.getElementById('formLogin').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    if (usuario) {
        alert(`Bem-vindo, ${email}`);
    } else {
        alert('Usuário ou senha inválidos.');
    }
});

// IA Criadora de Receita
document.getElementById('formIA').addEventListener('submit', function (e) {
    e.preventDefault();
    const nomeBebida = document.getElementById('nomeBebida').value;
    const ingredientes = document.getElementById('ingredientesDesejados').value;
    const proibidos = document.getElementById('ingredientesProibidos').value;
    const ocasiao = document.getElementById('ocasiao').value;
    const receita = `
        Receita de ${nomeBebida}:
        Ingredientes: ${ingredientes || 'Qualquer ingrediente exceto: ' + proibidos}
        Ocasião: ${ocasiao || 'Nenhuma ocasião específica'}
    `;
    document.getElementById('novaReceita').textContent = receita;
});
