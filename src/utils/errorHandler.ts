// Custom Error handling
export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.log("Error:", error.message);
    } else {
        console.log("An unknown error occurred.");
    }
}