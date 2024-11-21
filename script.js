document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-theme");
    const body = document.body;
    const ageVerificationOverlay = document.getElementById("age-verification");
    const ageYesButton = document.getElementById("age-yes");
    const ageNoButton = document.getElementById("age-no");

    // Alternar tema claro/escuro
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        toggleButton.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Escuro";
    });

    // Verificação de idade
    ageYesButton.addEventListener("click", () => {
        ageVerificationOverlay.style.display = "none";
    });

    ageNoButton.addEventListener("click", () => {
        window.location.href = "https://www.google.com"; // Redireciona se a resposta for não
    });

    // Exibição da receita quando clicada
    document.querySelectorAll(".drink-name").forEach(button => {
        button.addEventListener("click", (event) => {
            const recipeName = event.target.dataset.recipe;
            const recipeDetails = document.getElementById("recipe-details");

            // Substitua por detalhes reais da receita
            recipeDetails.textContent = `${recipeName} - Receita detalhada aqui...`;
            document.getElementById("recipe-display").style.display = "block";
            document.getElementById("back-to-list").style.display = "inline-block";
        });
    });

    // Voltar à lista de bebidas
    document.getElementById("back-to-list").addEventListener("click", () => {
        document.getElementById("recipe-display").style.display = "none";
        document.getElementById("back-to-list").style.display = "none";
    });
});
