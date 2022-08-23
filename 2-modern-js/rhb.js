

/** Nnew way of declaring a function 
 * This function will not care who calls it
 * "this" here is NOT the caller of myFunction
 * It's tha same "this" found in "myFunction's" scope
*/
const myFunction = (a,b) => {
    return a + b;
}

let test = myFunction(1,3);
console.log(test);


/** Old way of declaring a funnction */
const myOldFunction = function(a,b){
    return a + b;
}

let newTest = myOldFunction(1,3);
console.log(newTest);