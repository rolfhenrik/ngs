

//Print the user
console.log('Mac OS user: ' + process.env.USER);

//custome variable 1
console.log('Custom variable 1: ' + process.env.CUSTOM1);


//custom variable 2
console.log('Custom variable 2: ' + process.env.CUSTOM2);

/**
 * Execute:
 * rolf.bekkstrand$ CUSTOM1=10 CUSTOM2=20 node rh_custom_env_var.js
 */

/**
 * Can also export variables first and they will be available
 * NO-SWI-MC-0011:3-process rolf.bekkstrand$ export CUSTOM1=99
 * NO-SWI-MC-0011:3-process rolf.bekkstrand$ export CUSTOM2=-1
 * NO-SWI-MC-0011:3-process rolf.bekkstrand$ node rh_custom_env_var.js
 */