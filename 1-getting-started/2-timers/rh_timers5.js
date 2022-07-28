

/**
 * Print the hello world message every second but only 5 times
 * Print done and exit
 * You can't use setTimeOut
 */


let counter = 0;

const timerID = setInterval(
    () => {
            console.log('hello world');
            counter += 1;
       
            if(counter===5)
            {
                console.log('done');
                clearTimeout(timerID);
            
            } 
    },1000
);


