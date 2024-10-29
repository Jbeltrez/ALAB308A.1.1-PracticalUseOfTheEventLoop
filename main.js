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