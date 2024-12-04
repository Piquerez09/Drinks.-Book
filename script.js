// Simulated Database for Users
let users = [];
let recipes = {
  "Classics": ["Negroni", "Manhattan"],
  "Tropical": ["Piña Colada", "Mai Tai"],
  "Modern": ["Espresso Martini", "Paper Plane"],
  "Italia Drinks": ["Aperol Spritz", "Limoncello"],
};

// Simulated Store
let storeItems = [
  { name: "Negroni Mix", price: "$25", img: "negroni.jpg" },
  { name: "Limoncello Bottle", price: "$30", img: "limoncello.jpg" },
  { name: "Aperol Spritz Kit", price: "$50", img: "aperol.jpg" },
];

// Register User
document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  users.push({ name, email, password });
  alert(`Welcome, ${name}!`);
});

// Load Category
function loadCategory(category) {
  let bebidas = recipes[category] || [];
  let list = bebidas.map(
    (b) => `<button onclick="showRecipe('${b}')">${b}</button>`
  );
  document.getElementById("bebidas-list").innerHTML = list.join("");
}

// Show Recipe
function showRecipe(drinkName) {
  let recipe = `${drinkName} Recipe Placeholder...`;
  document.getElementById("bebidas-list").innerHTML = `<div>${recipe}</div><button onclick="loadCategory()">Back</button>`;
}

// Generate Recipe (IA)
function generateRecipe() {
  let preferences = document.getElementById("preferences").value;
  let occasion = document.getElementById("occasion").value;
  let customRecipe = `Try this: Mix ingredients you love (${preferences}), for a ${occasion}!`;
  document.getElementById("receitaDetalhada").innerText = customRecipe;
}

// Populate Store
function populateStore() {
  let items = storeItems.map(
    (item) =>
      `<div class="item"><img src="${item.img}" alt="${item.name}"><p>${item.name} - ${item.price}</p></div>`
  );
  document.getElementById("store-items").innerHTML = items.join("");
}
populateStore();
