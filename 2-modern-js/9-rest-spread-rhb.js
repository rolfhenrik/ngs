

const [first, ...restOfItems] = [10,20,30,40]; // ... = rest spread
console.log(first); //10
console.log(restOfItems[1]); //30


const data = {
    temp1 : '001',
    temp2 : '002',
    firstName : 'John',
    lastName : 'Doe'
};

const {temp1,temp2, ...person} = data;

console.log(person.firstName); //John


const newArray = [...restOfItems]; //Will make a copy
console.log(newArray);

//Creates a copy of person
const newObject = {
    ...person,
}

console.log(newObject);