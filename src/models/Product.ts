
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

    // Modified function definition after importing the calculate discount function   ---- Part 3.2.1 Implementation / Implement Utilities / Discount Calculator Module 
    getPriceWithDiscount(): number {
        const discountAmount = calculateDiscount(this.price, this.discountPercentage);
        const discountedPrice = this.price - discountAmount;
        
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