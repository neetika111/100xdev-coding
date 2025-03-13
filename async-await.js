// Define an asynchronous function named 'kiratsAsyncFunction'
function kiratsAsyncFunction() {
    // Create a new Promise object
    let p = new Promise(function(resolve) {
      // Simulating an asynchronous operation (e.g., API call, file read, etc.)
      
      // Resolve the promise with the value "hi there!"
      resolve("hi there!");
    });
  
    // Return the promise
    return p;
  }
  
  // Define an async function named 'main'
  async function main() {
    // Wait for 'kiratsAsyncFunction' to complete and store its resolved value
    const value = await kiratsAsyncFunction();
    
    // Print the resolved value to the console
    console.log(value);
  }
  
  // Call the 'main' function to execute the asynchronous operation
  main();
  