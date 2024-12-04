// Sistema de cadastro
document.getElementById('formCadastro').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email && senha) {
        alert(`Cadastro realizado com sucesso! Bem-vindo, ${email}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Login com Google
function onGoogleLogin(response) {
    alert(`Login realizado com sucesso! Bem-vindo, ${response.credential}`);
}

// Login com Apple (simulado)
function loginApple() {
    alert('Login com Apple realizado com sucesso!');
}

// Exibir receitas
function mostrarReceita(bebida) {
    let receita;
    switch (bebida) {
        case 'margarita':
            receita = 'Receita de Margarita: Tequila, Triple Sec, Suco de Limão.';
            break;
        case 'mojito':
            receita = 'Receita de Mojito: Rum, Hortelã, Açúcar, Limão.';
            break;
        case 'pinaColada':
            receita = 'Receita de Piña Colada: Rum, Abacaxi, Creme de Coco.';
            break;
        case 'caipirinha':
            receita = 'Receita de Caipirinha: Cachaça, Limão, Açúcar.';
            break;
        case 'dryMartini':
            receita = 'Receita de Dry Martini: Gin, Vermute Seco.';
            break;
        case 'negroni':
            receita = 'Receita de Negroni: Gin, Vermute Rosso, Campari.';
            break;
        default:
            receita = 'Receita não encontrada.';
    }
    document.getElementById('receitaText').textContent = receita;
    document.getElementById('receita').style.display = 'block';
}

function voltarCategorias() {
    document.getElementById('receita').style.display = 'none';
}

// IA para criar nova receita
document.getElementById('iaForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const ingredientes = document.getElementById('ingredientes').value;
    const naoUsar = document.getElementById('naoUsar').value;
    const ocasiao = document.getElementById('ocasiao').value;

    const novaReceita = `
        Baseado na sua escolha, aqui está a sua nova receita:
        Ingredientes: ${ingredientes || 'Não especificados'},
        Evitar: ${naoUsar || 'Nada especificado'},
        Ocasião: ${ocasiao || 'Qualquer situação'}.
    `;
    document.getElementById('novaReceita').textContent = novaReceita;
});
