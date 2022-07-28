

const wantedRuns = 5;
let actualRuns = 0;
let executionTime = 0;
let interval = 1000;

function recursiveHelloWorld(runs,interval)
{

    if (actualRuns<runs){
        
        executionTime += interval;
        
        console.log('Hello world after ' + executionTime/1000 + ' seconds,');
        
        actualRuns++;
        timerID = setTimeout(recursiveHelloWorld,interval,wantedRuns,interval);
    }
    else
    {
        console.log('Done');
    }
    
}

let timerID = setTimeout(recursiveHelloWorld,interval,wantedRuns,interval);

/** clearTimeout can be used to stop a timeout loop */
setTimeout(
    () => {
        clearTimeout(timerID);
    },5000
);

//setImmediate, will do the same as setting a timeout with 0 ms

//clearInterval
//clearImmediate

