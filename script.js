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
        console.error("Botão 'Não' não encontrado.");// Alternância de modo claro e escuro
        const themeToggle = document.getElementById('theme-toggle');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
        });
        
        // Verificação de idade
        function continueSite() {
            const modal = document.getElementById('age-verification-modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function redirectToGoogle() {
            window.location.href = 'https://www.google.com';
        }
        
        window.onload = function () {
            const modal = document.getElementById('age-verification-modal');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        
            document.getElementById('age-yes').addEventListener('click', continueSite);
            document.getElementById('age-no').addEventListener('click', redirectToGoogle);
        };
        
        // Função de Pesquisa (simulação)
        function searchRecipes() {
            const query = document.getElementById('search').value.toLowerCase();
            alert(`Buscando receitas para: ${query}`);
        }