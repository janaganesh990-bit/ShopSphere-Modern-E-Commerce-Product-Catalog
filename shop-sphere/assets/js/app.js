import { router } from "./router.js";
import { updateCartBadge } from "./cart.js";

document.addEventListener("DOMContentLoaded", async () => {

    updateCartBadge();

    await router();

});

document.addEventListener("click", async (e) => {

    const link = e.target.closest("[data-link]");

    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.getAttribute("href"));

    await router();

});

window.addEventListener("popstate", router);