// You will create an E-commerce Product Management System using TypeScript. 
// Before you begin coding, create a project plan and outline the steps you’ll take to implement the API interactions and display product data.

// Develop Product Class:

//     Product Base Class (Product.ts):
//         Define a Product class that includes the appropriate properties based on data provided in the API response.
//         Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.


import { calculateDiscount } from "../utils/discountCalculator.js";

import { calculateTax } from "../utils/taxCalculator.js"


export class Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;

    constructor(
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,

    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }

    displayDetails(): void {
        console.log("Product ID:", this.id);
        console.log("Title:", this.title);
        console.log("Description:", this.description);
        console.log("Category:", this.category);
        console.log("Original Price: $", this.price);
        console.log("Discount Percentage:", this.discountPercentage, "%");
        console.log("Discounted Price: $", this.getPriceWithDiscount());

        // Adding these statements to include tax and Final Price // After importing calculateTax
        console.log("\nTest 6");
        console.log(`Tax Amount : $${this.getTaxAmount()}`);
        console.log(`Final Price Including Tax: $${this.getPriceWithTax()}`);


    }

    // Initial function definition before importing the calculate discount function
    /*
    getPriceWithDiscount(): number {

        const discountAmount = this.price * this.discountPercentage / 100;
        const discountedPrice = this.price - discountAmount;
        console.log("\nTest 1");
        return discountedPrice;
        
    }
    */

    // Modified function definition after importing the calculate discount function   ---- Part 3.2.1 Implementation / Implement Utilities / Discount Calculator Module 
    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        const discountedPrice = this.price - discountAmount;
        //console.log("\nTest 3");
        return discountedPrice;


    }

    getPriceWithTax(): number {
        const discountedPrice = this.getPriceWithDiscount();
        const taxAmount = calculateTax(discountedPrice, this.category);
        const finalPrice = discountedPrice + taxAmount;

        return finalPrice;
    }

    getTaxAmount(): number {
        const discountedPrice = this.getPriceWithDiscount();
        return calculateTax(discountedPrice, this.category);
    }

}