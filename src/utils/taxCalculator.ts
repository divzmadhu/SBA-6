
export function calculateTax(price:number,tax:number):number
{
    const taxAmount = price * tax / 100;
    return taxAmount;
}