/*
setInterval(
    () => console.log('hello world'),2000
);
*/



const timerID = setTimeout(
    () => console.log('You will never see this message'),0
);

clearTimeout(timerID);


