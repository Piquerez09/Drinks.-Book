// Função para continuar no site após o clique em "Sim"
function continueSite() {
    const ageVerificationModal = document.getElementById('age-verification-modal');
    if (ageVerificationModal) {
        // Oculta o modal
        ageVerificationModal.classList.add('hidden');

        // Permite rolagem no site
        document.body.style.overflow = 'auto';
    } else {
        console.error("Modal de verificação de idade não encontrado.");
    }
}

// Função para redirecionar ao Google caso clique em "Não"
function redirectToGoogle() {
    window.location.href = 'https://www.google.com';
}

// Adiciona eventos aos botões após carregar a página
window.onload = function () {
    const ageYesButton = document.getElementById('age-yes');
    const ageNoButton = document.getElementById('age-no');
    const ageVerificationModal = document.getElementById('age-verification-modal');

    // Certifica-se de que o modal esteja visível ao carregar a página
    if (ageVerificationModal) {
        ageVerificationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Bloqueia a rolagem enquanto o modal estiver ativo
    }

    // Configura o botão "Sim"
    if (ageYesButton) {
        ageYesButton.addEventListener('click', continueSite);
    } else {
        console.error("Botão 'Sim' não encontrado.");
    }

    // Configura o botão "Não"
    if (ageNoButton) {
        ageNoButton.addEventListener('click', redirectToGoogle);
    } else {
        console.error("Botão 'Não' não encontrado.");
    }
};
