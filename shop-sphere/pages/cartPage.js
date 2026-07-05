import {
    getCart
} from "../assets/js/storage.js";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} from "../assets/js/cart.js";

export function CartPage() {

    const app = document.getElementById("app");

    const cart = getCart();

    if (cart.length === 0) {

        app.innerHTML = `
            <h1>Your Cart</h1>
            <p>Your cart is empty.</p>
        `;

        return;
    }

    let total = 0;

    app.innerHTML = `

        <h1>Your Cart</h1>

        <div class="cart-items">

            ${cart.map(item => {

                total += item.price * item.quantity;

                return `

                    <div class="cart-item">

                        <img src="${item.image}">

                        <div>

                            <h3>${item.title}</h3>

                            <p>$${item.price}</p>

                            <div class="qty-controls">

                                <button data-dec="${item.id}">-</button>

                                <span>${item.quantity}</span>

                                <button data-inc="${item.id}">+</button>

                            </div>

                            <button data-remove="${item.id}">

                                Remove

                            </button>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>

        <h2>Total: $${total.toFixed(2)}</h2>

    `;

    document.querySelectorAll("[data-inc]").forEach(btn => {

        btn.onclick = () => {

            increaseQuantity(Number(btn.dataset.inc));

            CartPage();

        };

    });

    document.querySelectorAll("[data-dec]").forEach(btn => {

        btn.onclick = () => {

            decreaseQuantity(Number(btn.dataset.dec));

            CartPage();

        };

    });

    document.querySelectorAll("[data-remove]").forEach(btn => {

        btn.onclick = () => {

            removeFromCart(Number(btn.dataset.remove));

            CartPage();

        };

    });

}