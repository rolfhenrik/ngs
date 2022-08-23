


/** Dsetructuring the Math
 * I can now call PI, E, SQRT etc.
 */
const {PI,E,sqrt} = Math;
console.log(PI);


const triangle = {
    label: 'MySquare',
    a : 2,
    b : 2
};

const precise = {
    precision : 4
}

/** 
 * This function will look for a and b in the object that is passed to it
 * Precision is default 2, but optional "= {}"
 */
const hypotenuse = ({a,b},{precision = 2} = {}) => {

    let res = sqrt((a*a)+(b*b)).toFixed(precision);
    console.log(res);
}

//Calling the function by passing the triangle object
hypotenuse(triangle); //2 digits
hypotenuse(triangle, triangle); //2 digits
hypotenuse(triangle,{precision : 5}); //5 digits
hypotenuse(triangle,precise); //4 digits