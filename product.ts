// Task 4: Define Product interface and calculate total price

// The Product interface defines the structure of the product objects.
// Each product should have a 'name' of type string and a 'price' of type number.

interface Product {
    name: string;
    price: number;
  }
  

// This function takes an array of Product objects and calculates the total price.
// It uses the 'reduce' method to accumulate the prices of all products in the array.
  function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
  }

  //  define  array of products, each with a name and price.
  const products: Product[] = [
    { name: "Laptop", price: 100 },
    { name: "TV", price: 500 },
    { name: "Tablet", price: 300 },
  ];
  // Calling the 'calculateTotalPrice' function to calculate and log the total price of the products.

  console.log("Total Price:", calculateTotalPrice(products));
  

// Task 5: Validate email address using regex

// This function checks if the provided email address is valid according to a specific regex pattern.
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Testing the 'isValidEmail' function with valid and invalid email addresses.
  console.log("Is valid email:", isValidEmail("maha1.sami2003@gmail.com")); 
  console.log("Is valid email:", isValidEmail("invalid-email")); 

//----------------------------------------------------------------------------------------------
  //How to Run TypeScript Files and Convert Them to JavaScript in Your Project:
  //We performed the conversion because the browser does not directly understand TypeScript, 
 //so it must be converted to JavaScript to execute it.
 

// The First Method: Using the Console in JavaScript (Node.js):

  //1- First, I installed TypeScript on my computer using this command:
      // npm install -g typescript
  // 2-  After the installation, I converted the TypeScript file (.ts) to JavaScript (.js). I used the following command:
        //    tsc product.ts ////This command converted the product.ts file into product.js.

  // 3-Then, I ran the file using Node.js with the command:
      //    node product.js

 // 4-Once I executed this command, the results appeared in the console.

//  The Second Method: Using HTML:
  //1- First, I converted the TypeScript file to JavaScript using the following command:
       //   tsc product.ts/////This created a product.js file from the product.ts file.

 //2-Then, I opened the HTML file I was working on and added the link to the converted JavaScript file inside the <script> tag:
       //  <script src="product.js"></script>
// 3-After adding the script, I opened the HTML file in my browser, and opened the console
// 4-Finally, I saw the result in the console inside the browser, where the total value was printed correctly.




  










    

      











  
  