
const mystery = 'answer';

const PI = Math.PI;

const obj = {
    func2 : () => {console.log('function 2 in object');},
    [mystery]: 32,
    PI //Shortter than PI:PI that will do the same
}


console.log(obj.mystery); //will be undefined
console.log(obj.answer); //will work

obj.func2(); //will be "function 2 in object"

console.log(obj.PI);