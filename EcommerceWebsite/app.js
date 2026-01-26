const container = document.getElementById("productContainer");
const loader = document.getElementById("loader");
const inputtext = document.getElementById("inputtext");

let debounceTimer;

// Input search with debounce
inputtext.addEventListener("input", () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        const query = inputtext.value.trim();

        if (query === "") {
            fetchAllProducts();
        } else {
            searchProducts(query);
        }
    }, 500); // ⏱ debounce time
});

// Fetch all products
function fetchAllProducts() {
    loader.style.display = "block";
    fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            loader.style.display = "none";
            showProducts(data.products);
        });
}

// Search products from API
function searchProducts(query) {
    loader.style.display = "block";
    fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
            loader.style.display = "none";
            showProducts(data.products);
        });
}

// Show products
function showProducts(products) {
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "<h2>No product found</h2>";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.thumbnail}">
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <p class="rating">⭐ ${product.rating}</p>
            <p class="description">${product.description}</p>
        `;

        container.appendChild(card);
    });
}

// Initial load
fetchAllProducts();
