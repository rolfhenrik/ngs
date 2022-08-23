
this.id = 'exports';



const testerObj = {
  func1: function () {
    console.log('func 1', this);
  },
  func2: () => {
    console.log('func 2', this);
  }
};

testerObj.func1();
testerObj.func2();