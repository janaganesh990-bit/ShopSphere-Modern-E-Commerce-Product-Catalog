const BASE_URL = "https://fakestoreapi.com";

export async function getProducts() {
    try {
        const response = await fetch(`${BASE_URL}/products`);

        if (!response.ok) {
            throw new Error("Unable to fetch products.");
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`${BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error("Unable to fetch product.");
        }

        return await response.json();

    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getCategories() {

    try {

        const response = await fetch(`${BASE_URL}/products/categories`);

        return await response.json();

    } catch {

        return [];

    }

}