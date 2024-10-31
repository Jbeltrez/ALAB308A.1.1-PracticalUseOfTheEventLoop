let counter = 0
function recall (n) {
        
    while (n > 0) {
        counter++
        recall(n); 
    }
}
try {
    
    recall(1);
    // console.log(counter);
} catch (err) {
    console.log(counter)
    console.log('Here is the error' + err)
} finally {
    console.log(' this will always run')
}

console.log('...The execution continues'); 

function arrayFlat(array) {
    let result = []; // Initialize an empty array to hold the flattened result
  
    for (let i = 0; i < array.length; i++) { // Loop through each element of the input array
      let element = array[i]; // Get the current element
  
      if (Array.isArray(element)) { // Check if the current element is an array
        result = result.concat(arrayFlat(element)); // Recursively flatten the array and concatenate the result
      } else {
        result.push(element); // If the element is not an array, add it to the result
      }
    }
  
    return result; // Return the completely flattened array
  }
  
  // Test the function
  console.log(arrayFlat([1, [2, [3, [4, 5]], 6], 7]));
  // Expected Output: [1, 2, 3, 4, 5, 6, 7]
  

  
  // Modified function for trampolining
function arrayFlatTrampoline(arr, result = []) {
    return () => {
      if (arr.length === 0) {
        return result; // If there are no more elements to process, return the flattened result
      }
      
      let [first, ...rest] = arr; // Destructure the first element and the rest of the array
  
      if (Array.isArray(first)) {
        // If the first element is an array, return a function that continues flattening
        return arrayFlatTrampoline([...first, ...rest], result);
      } else {
        // If the first element is not an array, add it to the result and continue
        result.push(first);
        return arrayFlatTrampoline(rest, result);
      }
    };
  }
  
  // Trampoline function
  function trampoline(func) {
    let result = func(); // Call the initial function
    
    while (typeof result === "function") {
      result = result(); // If the result is a function, call it iteratively
    }
    
    return result; // Return the final result when it's no longer a function
  }
  
  // Trampoline
  let nestedArray = [1, [2, [3, 4]], 5, [6, [7, [8, 9]]]];
  
  let flattenedArray = trampoline(arrayFlatTrampoline(nestedArray));
  console.log(flattenedArray);
  // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  



// Part 3 

const trampoline = (flattenThis, ...args) => {
    let result = flattenThis(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }