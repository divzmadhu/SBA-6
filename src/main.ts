
/*
 * Project Name: E-commerce Product Management System
 *
 * Description:
 * This project uses the DummyJSON Products API to retrieve product
 * information and display product details.
 *
 * Features:
 * - Fetches product data using the Fetch API and async/await.
 * - Creates Product objects using the retrieved API data.
 * - Calculates product discounts and applicable taxes.
 * - Displays original prices, discounted prices, tax amounts,
 *   and final prices.
 * - Handles API errors using try/catch and a custom error handler.
 *
 * Technologies: TypeScript, JavaScript, Node.js, Fetch API
 */


import { Product } from "./models/Product.js";



import { fetchProducts } from "./services/apiService.js";      //API 



async function testApi() {
    try {

        const data = await fetchProducts();

        for (let i = 0; i < data.products.length; i++) {
            const apiProduct = data.products[i];

            const newProduct = new Product(
                apiProduct.id,
                apiProduct.title,
                apiProduct.description,
                apiProduct.category,
                apiProduct.price,
                apiProduct.discountPercentage
            );

            newProduct.displayDetails();
            console.log("-------------------------");
        }
    }
    catch (error) {
        console.log("Unable to display products:", error);
    }
}


testApi();