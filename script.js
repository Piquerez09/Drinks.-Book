// Verificação de Idade
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("age-verification-modal");
    const ageYes = document.getElementById("age-yes");
    const ageNo = document.getElementById("age-no");

    ageYes.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    ageNo.addEventListener("click", () => {
        alert("Você precisa ser maior de 18 anos para acessar este site.");
        window.location.href = "https://www.google.com";
    });

    // Mostra o modal e bloqueia o scroll inicial
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
});

// Alternância de Tema (Claro/Escuro)
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "Modo Claro"
        : "Modo Escuro";
});
