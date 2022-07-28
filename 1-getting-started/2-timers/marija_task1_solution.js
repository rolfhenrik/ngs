

/**
 * const means "constant"
 * you will not be able to change the value of a constant after its declared, but you can use it exactly like a var or let
 */
const x = 5;
const y = 7;
const z = 9;

/**
 * pi will be 3.14....
 * random will be a number between 0 and 1000
 */
const pi = Math.PI;
const random = Math.floor(Math.random() * 1000);

/**
 * An array with 9 values
 * A const with the array lenght (9)
 * A const with the index of the last element in the array
 * A const with the value of the last element in the array
 */
const myArray = new Array(1,2,3,4,5,6,7,8,9);
const myArrayLenght = myArray.length;
const myArrayIndexOfLastElement = myArrayLenght - 1;
const myArrayValueOfLasetElement = myArray[myArrayIndexOfLastElement];


/**
 * Task 1
 * Print the sum of x and z,  if y is smaller than z
 * Else print the sum of x, y and z
 */
console.log('\n Task 1:');
if(y < z){
    console.log(x + z);
}
else{
    console.log(x+y+z);
}



/**
 * Task 2
 * Print PI, if x multiplied y is greater than z
 * Else print the x multiplied by y
 */
 console.log('\n Task 2:');
if(x * y > z){
    console.log(pi);
}
else
{
    console.log(x*y);
}



/**
 * Task 3
 * Print 'z is the biggest number' if z is greater than y AND y is greater than x
 * Else print 'z is not the biggest number'
 */
 console.log('\n Task 3:');
if (z > y && y > x){
    console.log('z is the biggest number');
}
else
{
    console.log('z is not the biggest number');
}



/**
 * Task 4
 * Use a switch 
 * Print 'my number is negative' if mySum is -1
 * Print 'my number is 5' if mySum is 5
 * Else print 'my sum is: ' + mySum
 */
const mySum = (((x * 2) + (2*2) - 4) / 2) * 2; //do not care what is going on here... its just an attempt to distract you from the correct result
console.log('\n Task 4:');

switch(mySum)
{
    case -1:
        console.log('my number is negative');
        break;
    case 5:
        console.log('my sum is 5');
        break;
    default:
        console.log('my sum is: ' + mySum);
}



/**
 * Task 5
 * This is a bit difficult
 * Use a random number
 * Print 'smaller than 500: ' + the random number, if the random number is smaller than 500
 * Else print 'greater than or equal to 500: ' + the random number
 * There is no correct result of this task since we are using a random number
 */
 console.log('\n Task 5:');

 if(random < 500){
    console.log('smaller than 500: ' + random);
 }
 else{
    console.log('greater than or equal to 500: ' + random);
 }


/**
 * Task 6
 * Not sure if you have learned to use an array
 * Print the value of the first element in myArray (myArray[0]) if the value of the first element is greater than the value of the second element
 * Else print the value of the last element in myArray (hint myArray[myArrayValueOfLasetElement])
 * Constraint - do not print the value of the constant myArrayValueOfLasetElement
 * Correct result should be 9
 */
console.log('\n Task 6:');

if(myArray[0] > myArray[1]){
    console.log(myArray[0]);
}
else{
    console.log(myArray[myArrayIndexOfLastElement]);
}


/**
 * Task 7
 * Not sure if you have learned this
 * Use an if else statement to find the biggest value of x, y and z
 * print the biggest number
 * 
 * You will have to use: 
 * 
 * if(condition 1){print} 
 * else if(condition 2){print}
 * else{print}
 * 
 * See also: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else 
 */

 console.log('\n Task 7:');

if(x>y && x>z){
    console.log(x);
}
else if(y>x && y>z){
    console.log(y);
}
else
{
    console.log(z);
}
