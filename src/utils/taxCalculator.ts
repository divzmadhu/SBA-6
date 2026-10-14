
// export function calculateTax(price:number,tax:number):number
export function calculateTax(price:number,category :string):number
{

    //Adding conditions as specified by the requirement --- Part 3.2.2 Implementation / Implement Utilities / Tax Calculator Module 
    
    // Note that the product data returned from the API does not include a taxPercentage field like it includes a discountPercentage field. 
    // Apply a default standard tax rate of 4.75% to each product; however, products with a category of “groceries” should only be taxed at 3%.

    let tax : number;
    if(category === "groceries")
    {
        tax = 3;
    }
    else
    {
        tax = 4.75;
    }
    
    const taxAmount = price * tax /100;
    return taxAmount;
}