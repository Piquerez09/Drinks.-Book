// Função de Pesquisa
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-bar').value.toLowerCase();
    if (!query) {
        alert('Digite algo para pesquisar!');
        return;
    }
    alert(`Você pesquisou por: ${query}`);
});

// Navegação por Categorias
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        alert(`Você selecionou a categoria: ${category}`);
        // Aqui você pode redirecionar ou carregar receitas específicas
    });
});