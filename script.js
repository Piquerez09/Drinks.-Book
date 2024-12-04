// Banco de dados simulado
let database = {
    usuarios: [],
    bebidas: {
        Clássicos: ["Mojito", "Caipirinha", "Martini"],
        Tropicais: ["Piña Colada", "Mai Tai", "Blue Lagoon"],
        Modernos: ["Cosmopolitan", "Espresso Martini", "Gin Tônica"],
        "Italia Drinks": ["Aperol Spritz", "Negroni", "Limoncello"]
    },
    receitas: {
        Mojito: "Ingredientes: Rum, hortelã, açúcar, limão, água com gás. Modo de preparo: Misture tudo com gelo.",
        Caipirinha: "Ingredientes: Cachaça, limão, açúcar. Modo de preparo: Macere o limão e misture com gelo e cachaça.",
        Martini: "Ingredientes: Gin, vermute seco. Modo de preparo: Misture com gelo e sirva.",
        // Adicione mais receitas...
    }
};

// Cadastro de usuário
function realizarCadastro() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if (email && senha) {
        database.usuarios.push({ email, senha });
        alert("Cadastro realizado com sucesso!");
        document.getElementById("user-avatar").textContent = email[0].toUpperCase();
    } else {
        alert("Preencha todos os campos!");
    }
}

// Exibir bebidas por categoria
function mostrarBebidas(categoria) {
    const bebidas = database.bebidas[categoria];
    const bebidasList = document.getElementById("bebidas-list");
    bebidasList.innerHTML = bebidas
        .map(
            (bebida) => `<button onclick="mostrarReceita('${bebida}')">${bebida}</button>`
        )
        .join("");
}

// Mostrar receita detalhada
function mostrarReceita(bebida) {
    const receita = database.receitas[bebida];
    const bebidasList = document.getElementById("bebidas-list");
    bebidasList.innerHTML = `
        <div id="receitaDetalhada">
            <h3>${bebida}</h3>
            <p>${receita}</p>
            <button onclick="voltarCategorias()">Voltar</button>
        </div>`;
}

function voltarCategorias() {
    document.getElementById("bebidas-list").innerHTML = "";
}

// IA para criar receitas
function criarReceita() {
    const preferencias = document.getElementById("preferencias").value;
    const restricoes = document.getElementById("restricoes").value;
    const ocasiao = document.getElementById("ocasion").value;

    const receitaGerada = `
        Receita personalizada para ${ocasiao}:
        Ingredientes desejados: ${preferencias}.
        Restrições: ${restricoes}.
        Misture os ingredientes e aproveite!
    `;
    document.getElementById("receitaDetalhada").innerHTML = `<p>${receitaGerada}</p>`;
}

// Loja dinâmica
const produtos = [
    { nome: "Mojito Mix", preco: "R$ 49,90", imagem: "mojito.jpg" },
    { nome: "Kit Negroni", preco: "R$ 89,90", imagem: "negroni.jpg" }
];
function carregarProdutos() {
    const produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = produtos
        .map(
            (produto) => `
            <div class="produto">
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
                <button>Comprar</button>
            </div>`
        )
        .join("");
}
carregarProdutos();
