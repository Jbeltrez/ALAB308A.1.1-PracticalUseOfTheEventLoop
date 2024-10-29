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

// Part 2 
function flattenThis(arr) {
    const a = [];
    arr.forEach(e) {
        if (Array.isArray(e) ) {
            a.push(e.flatten)
        }
    }

}

// Part 3 

const trampoline = (flattenThis, ...args) => {
    let result = flattenThis(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }