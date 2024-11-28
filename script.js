// Verificação de Idade
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("age-verification-modal");
    const ageYes = document.getElementById("age-yes");
    const ageNo = document.getElementById("age-no");

    // Função para continuar no site
    ageYes.addEventListener("click", () => {
        modal.style.display = "none"; // Oculta o modal
        document.body.style.overflow = "auto"; // Libera o scroll
    });

    // Função para redirecionar caso o usuário não tenha 18 anos
    ageNo.addEventListener("click", () => {
        window.location.href = "https://www.google.com"; // Alterar para o link desejado
    });

    // Mostra o modal e desativa o scroll inicial
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
});
