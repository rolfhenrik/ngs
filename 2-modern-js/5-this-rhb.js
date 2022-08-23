


this.name = 'Rolf';

const testerObj = {
    func1: () => {
        console.log(this.name);
    },
    func2: function(){
        console.log(this.func1);
    }
}

testerObj.func1();
testerObj.func2();


a = ()=> {
    console.log('hehe');
}

a();

console.log(typeof a);


let arr = [1,2,3];

arr.map(a => a * a);

console.log(arr[1]);