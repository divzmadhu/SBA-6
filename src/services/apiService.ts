// Starting with API

const API_URL = "https://dummyjson.com/products";
//const API_URL = "https://dummyjson.com/invalid-endpoint";   //Testing for negative test case for catching errors

export async function fetchProducts() {
    try {

        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.log("Error fetching products:", error);
        throw error;
    }
}

