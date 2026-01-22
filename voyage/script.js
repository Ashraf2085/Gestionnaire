// 1. Tes données (ce qui viendrait normalement d'une base de données)
let panier = []
const produits = [
    { nom: "iPhone 15", prix: 999 },
    { nom: "Clavier Mécanique", prix: 120 },
    { nom: "Souris Gamer", prix: 75 }
];

// 2. Ta mission :
let conteneur = document.getElementById("conteneur")
let btn = document.getElementById("btnFiltre")

function dessinerProduits(liste) {
    conteneur.innerHTML = ""
    liste.forEach(e => {
    conteneur.innerHTML += `
    <div class="conteneur-choix">
    <h2>${e.nom}</h2>
    <p>${e.prix} €</p>
    <button>Ajouter au panier</button>
    </div>
    `
})
}
dessinerProduits(produits)
btn.addEventListener("click", () => {
    const filtrer = produits.filter(e => e.prix < 150)
    dessinerProduits(filtrer)
})
// <h3>Nom du produit</h3> <p>Prix : XX €</p>