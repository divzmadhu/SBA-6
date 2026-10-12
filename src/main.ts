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
// Test Output for Product Class (Product.ts)
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
Discounted Price: $ 90   
*/       