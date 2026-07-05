import { getProducts } from "../assets/js/api.js";

let allProducts = [];

function renderProducts(products) {
    return `
        <div class="product-grid">

            ${products.map(product => `

                <div class="product-card">

                    <img
                        loading="lazy"
                        src="${product.image}"
                        alt="${product.title}"
                    >

                    <h3>${product.title}</h3>

                    <p class="category">${product.category}</p>

                    <p class="price">$${product.price}</p>

                    <p>⭐ ${product.rating.rate}</p>

                    <a
                        href="/product/${product.id}"
                        data-link
                        class="btn"
                    >
                        View Product
                    </a>

                </div>

            `).join("")}

        </div>
    `;
}

export async function Products() {

    const app = document.getElementById("app");

    app.innerHTML = "<h2 class='loading'>Loading...</h2>";

    allProducts = await getProducts();

    const categories = [...new Set(allProducts.map(p => p.category))];

    app.innerHTML = `
        <h1>Products</h1>

        <div class="toolbar">

            <input
                id="search"
                type="text"
                placeholder="Search products..."
            >

            <select id="category">

                <option value="">All Categories</option>

                ${categories.map(cat =>
                    `<option value="${cat}">${cat}</option>`
                ).join("")}

            </select>

            <select id="sort">

                <option value="">Sort</option>

                <option value="low-high">
                    Price: Low → High
                </option>

                <option value="high-low">
                    Price: High → Low
                </option>

            </select>

        </div>

        <div id="product-list">

            ${renderProducts(allProducts)}

        </div>
    `;

    const search = document.getElementById("search");
    const category = document.getElementById("category");
    const sort = document.getElementById("sort");

    function filterProducts() {

        let filtered = [...allProducts];

        if (search.value.trim()) {

            filtered = filtered.filter(product =>
                product.title
                    .toLowerCase()
                    .includes(search.value.toLowerCase())
            );

        }

        if (category.value) {

            filtered = filtered.filter(product =>
                product.category === category.value
            );

        }

        if (sort.value === "low-high") {

            filtered.sort((a, b) => a.price - b.price);

        }

        if (sort.value === "high-low") {

            filtered.sort((a, b) => b.price - a.price);

        }

        document.getElementById("product-list").innerHTML =
            renderProducts(filtered);

    }

    search.addEventListener("input", filterProducts);
    category.addEventListener("change", filterProducts);
    sort.addEventListener("change", filterProducts);
}