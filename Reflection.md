### steps I followed while building the  "e-commerse-system" Project

1. **Discount calculation:** I worked on calculating the discount amount based on the product's original price and discount percentage.

2. **Tax calculation:** I implemented different tax rates for groceries and other product categories, as specified in the assignment.

3. **Final price calculation:** I worked on calculating the final price by subtracting the discount from the original price and adding tax to the discounted price.

4. **Integrating utility functions:** I connected the discount and tax calculation functions to the `Product` class so that they could be used when displaying product details.

5. **Fetching API data:** I used `fetch` and `async/await` to retrieve product information from the DummyJSON API and learned how to access the required properties from the API response.

6. **Displaying multiple products:** I used a `for` loop to create `Product` objects from the API data and display the details of multiple products instead of just one manually created product.

7. **Error handling:** I tested an invalid API endpoint to understand how to handle unsuccessful responses. I created a separate `errorHandler.ts` file and connected it to the API service to handle errors.

8. **Testing and debugging:** I tested the discount and tax calculations separately, checked the API response, and ran the application to verify that the calculations and product details were displayed correctly.

9. **Organizing the code:** I used temporary tests while developing the project. I learned that these could be removed from the final version while Git could help me review earlier committed versions of my code.

10 . API used is : `DummyJSON Products API`


### Challenges Faced and Improvements Made

1. **Correcting the final price calculation:** Based on the feedback I received, I revisited my `getPriceWithTax()` method to ensure that tax was included in the final price.

2. **Using the tax utility function:** I worked on integrating the `calculateTax()` function into my `Product` class so that the tax calculation was actually used when calculating the final price.

3. **Displaying multiple products:** My initial implementation did not include a loop to process multiple products. I updated `main.ts` to use a `for` loop to create `Product` objects from the API response and display their details.

4. **Working with API data:** I had to understand the API response structure and identify the correct product properties to pass to the `Product` constructor.

5. **Implementing error handling:** I tested an invalid API endpoint and worked on handling the error using `try...catch`. I also created a separate `errorHandler.ts` file and connected it to the API service.

6. **Improving Git practices:** I reviewed the feedback about my Git commits and the inclusion of the `dist` folder. I learned the importance of making meaningful commits and keeping generated files out of version control.

