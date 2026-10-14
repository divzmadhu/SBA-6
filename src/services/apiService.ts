
import { handleError } from "../utils/errorHandler.js";

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
        handleError(error);    //Updated the code to handle custom error handling
        throw error;
    }
}

/* Custom error handler output
Error: Failed to fetch products

Error handling in main.ts
Unable to display products: Error: Failed to fetch products */

