// Gerenciar Avatar do Usuário
const userAvatar = document.getElementById("userAvatar");

// Cadastro/Login
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    localStorage.setItem('usuario', email);
    userAvatar.textContent = getInitials(email);
    alert('Cadastro realizado!');
});

document.getElementById('formLogin').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    if (localStorage.getItem('usuario') === email) {
        userAvatar.textContent = getInitials(email);
        alert('Bem-vindo de volta!');
    } else {
        alert('Usuário não encontrado.');
    }
});

// Retorna as iniciais de um e-mail
function getInitials(email) {
    const parts = email.split('@')[0].split('.');
    return parts.map(p => p[0].toUpperCase()).join('');
}

// Função para exibir e esconder receitas
const categorias = {
    clássicas: ["Margarita", "Manhattan"],
    tropicais: ["Piña Colada", "Mai Tai"],
    modernas: ["Espresso Martini", "Negroni Sbagliato"],
    italianas: ["Aperol Spritz", "Limoncello"]
};

function showBebidas(categoria) {
    const bebidas = categorias[categoria];
    const bebidasList = document.getElementById('bebidasList');
    bebidasList.innerHTML = bebidas.map(nome => `<button onclick="mostrarReceita('${nome}')">${nome}</button>`).join('');
}

function mostrarReceita(nome) {
    document.getElementById('bebidasList').style.display = 'none';
    document.getElementById('receitaDetalhada').style.display = 'block';
    document.getElementById('receita').textContent = `Receita de ${nome}: ... (detalhes da receita aqui).`;
}

document.getElementById('voltarCategorias').addEventListener('click', function () {
    document.getElementById('bebidasList').style.display = 'block';
    document.getElementById('receitaDetalhada').style.display = 'none';
});
