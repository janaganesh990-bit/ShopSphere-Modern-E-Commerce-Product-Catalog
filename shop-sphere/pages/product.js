import { getProduct } from "../assets/js/api.js";
import { addToCart } from "../assets/js/cart.js";
import { showToast } from "../assets/js/ui.js";

export async function Product(id) {

    const app = document.getElementById("app");

    app.innerHTML = "<h2>Loading...</h2>";

    const product = await getProduct(id);

    if (!product) {

        app.innerHTML = "<h2>Product Not Found</h2>";

        return;

    }

    app.innerHTML = `

        <div class="product-detail">

            <img src="${product.image}" alt="${product.title}">

            <div>

                <h1>${product.title}</h1>

                <p>${product.description}</p>

                <h2>$${product.price}</h2>

                <p>⭐ ${product.rating.rate}</p>

                <button id="add-cart-btn" class="btn">

                    Add to Cart

                </button>

            </div>

        </div>

    `;

    document
        .getElementById("add-cart-btn")
        .addEventListener("click", () => {

            addToCart(product);

            showToast("Product added to cart");

        });

}