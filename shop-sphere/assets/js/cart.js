import { getCart, saveCart } from "./storage.js";

export function addToCart(product) {

    const cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart(cart);

    updateCartBadge();
}

export function removeFromCart(id) {

    const cart = getCart().filter(item => item.id !== id);

    saveCart(cart);

    updateCartBadge();
}

export function increaseQuantity(id) {

    const cart = getCart();

    const item = cart.find(i => i.id === id);

    if (item) item.quantity++;

    saveCart(cart);

    updateCartBadge();
}

export function decreaseQuantity(id) {

    const cart = getCart();

    const item = cart.find(i => i.id === id);

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {
        const filtered = cart.filter(i => i.id !== id);
        saveCart(filtered);
    } else {
        saveCart(cart);
    }

    updateCartBadge();
}

export function updateCartBadge() {

    const badge = document.getElementById("cart-count");

    if (!badge) return;

    const total = getCart().reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    badge.textContent = total;
}