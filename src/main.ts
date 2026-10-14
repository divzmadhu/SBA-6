import { Product } from "./models/Product.js";

import {calculateTax} from "./utils/taxCalculator.js"

import { fetchProducts } from "./services/apiService.js";      //API 

const product = new Product(
    1,
    "Essence Mascara",
    "A mascara product",
    "beauty",
    100,
    10
);

product.displayDetails();

// ==========================================
// Test 1 Output for Product Class (Product.ts)       // Before importing the calculate discount function
// ==========================================

// Running command: node dist/main.js
// Expected console output verifying the class properties, calculations, and formatting:
/*
Product ID: 1                   
Title: Essence Mascara           
Description: A mascara product  
Category: beauty                
Original Price: $ 100           
Discount Percentage: 10 %    

Test 1
Discounted Price: $ 90   
*/    

// ==========================================
// Test 3 Output for Product Class (Product.ts)       // After importing the calculate discount function
// ==========================================
// Running command: node dist/main.js
// Expected console output verifying the class properties, calculations, and formatting:
/*
Product ID: 1
Title: Essence Mascara
Description: A mascara product
Category: beauty
Original Price: $ 100
Discount Percentage: 10 %

Test 3
Discounted Price: $ 90

*/

import {calculateDiscount} from "./utils/discountCalculator.js";

console.log("\nTest 2");

console.log(`Discounted Price is ${calculateDiscount(100, 10)}`);
console.log(`Discounted Price is ${calculateDiscount(200, 0)}`);
console.log(`Discounted Price is ${calculateDiscount(300, 15)}`);
console.log(`Discounted Price is ${calculateDiscount(400, 20)}`);

/*
========================================== 
Test 2 Output for Discount Calculator (discountCalculator.ts)
========================================== 
Running command: node dist/main.js 
Expected console output verifying discount calculations:
Test 2
Discounted Price is 10
Discounted Price is 0
Discounted Price is 45
Discounted Price is 80
*/

console.log("\nTest 4");
console.log("Tax Calculator Tests");

console.log(calculateTax(150,"groceries"));
console.log(calculateTax(100,"electronics"));
console.log(calculateTax(150,"beauty"));

/*
========================================== 
Test 4 Output for Tax Calculator (taxCalculator.ts)
========================================== 
Running command: node dist/main.js 

Expected console output verifying tax calculations:
for groceries (3%) and other product categories (4.75%):

Test 4
Tax Calculator Tests
4.5
4.75
7.125
*/



console.log("\nTest 5");
console.log("Product Tax : ");
const taxAmount  = calculateTax(product.price, product.category);
console.log(`Tax Amount :  ${taxAmount}`);

/*
========================================== 
Test 5 Output for Tax Calculator (taxCalculator.ts)   // for the product item with category "beauty" declared above
========================================== 
Running command: node dist/main.js 

Expected console output verifying tax calculations:
for groceries (3%) and other product categories (4.75%):


Test 5
Product Tax :
Tax Amount :  4.75

*/

/*
========================================== 
Test 6: Modified Product Details Display (Product.ts) 
========================================== 
 Purpose: Verify that displayDetails() displays product details, 
 discounted price, tax amount, and final price including tax. 
 Running command: node dist/main.js

Test 6
Tax Amount : $4.275
Final Price Including Tax: $94.275
*/


async function testApi() {
    const data = await fetchProducts();

    console.log("\nTest 7: API Data");
    console.log(data.products[0]);
}

testApi();