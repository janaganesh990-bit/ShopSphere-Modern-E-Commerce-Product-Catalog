import { Home } from "../../pages/home.js";
import { Products } from "../../pages/products.js";
import { Product } from "../../pages/product.js";
import { About } from "../../pages/about.js";
import { Contact } from "../../pages/contact.js";
import { CartPage } from "../../pages/cartPage.js";
import { NotFound } from "../../pages/notfound.js";

export async function router() {

    const app = document.getElementById("app");

    const path = location.pathname;

    if (path === "/") {

        app.innerHTML = Home();

        return;

    }

    if (path === "/products") {

        await Products();

        return;

    }

    if (path.startsWith("/product/")) {

        const id = path.split("/")[2];

        await Product(id);

        return;

    }

    if (path === "/about") {

        app.innerHTML = About();

        return;

    }

    if (path === "/contact") {

        app.innerHTML = Contact();

        return;

    }

    if (path === "/cart") {

        CartPage();

        return;

    }

    app.innerHTML = NotFound();

}