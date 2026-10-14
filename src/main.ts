import { Product } from "./models/Product.js";

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