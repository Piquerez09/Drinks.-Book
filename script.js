// Função para continuar no site após clicar em "Sim"
function continueSite() {
    const modal = document.getElementById('age-verification-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para redirecionar ao Google caso clique em "Não"
function redirectToGoogle() {
    window.location.href = 'https://www.google.com';
}

// Função para alternar entre modos Claro e Escuro
function toggleDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Configuração dos eventos ao carregar a página
window.onload = function () {
    const ageYesButton = document.getElementById('age-yes');
    const ageNoButton = document.getElementById('age-no');
    const lightModeBtn = document.getElementById('light-mode-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');

    // Configura os botões do modal
    ageYesButton.addEventListener('click', continueSite);
    ageNoButton.addEventListener('click', redirectToGoogle);

    // Configura os botões de tema
    lightModeBtn.addEventListener('click', () => toggleDarkMode(false));
    darkModeBtn.addEventListener('click', () => toggleDarkMode(true));
};
