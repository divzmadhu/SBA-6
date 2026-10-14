export function calculateDiscount(
    price: number,
    discountPercentage: number,
): number {

    const discountAmount = price * discountPercentage / 100;

    return discountAmount;
}