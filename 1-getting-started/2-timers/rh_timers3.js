//NOTE - a timeout with 0ms interval will not execute immediatley, but after everything else is executred

setTimeout(
    () => {
        console.log('hello world after 0.5ms, MAYBE!')
    },
    500
    //500 means minimum 500ms
);

for (let i = 0; i <10000000000; i++){
    //Block Node Synchronously for a while
    //Node can do nothing while this is executing
}