function func() {
  return {
    arr: [],
    add: function (i) {
      console.log(this);
      this.arr.push(i);
    },
    pop: function () {
      return this.arr.pop();
    },
  };
}

class Test {
  constructor(size) {
    this.size = size;
    this.arr = [];
  }

  add(num) {
    if (this.arr.length > this.size) return;
    this.arr.push(num);
  }

  remove() {
    if (!this.arr.length) return;
    this.arr.pop();
  }
}

let test = new Test(5);
test.add(5);
test.add(3);
test.add(4);
test.remove();

console.log(test);

// let a = func();

// a.add(1);
// a.add(2);
// a.add(3);
// a.pop();

// console.log(a);
