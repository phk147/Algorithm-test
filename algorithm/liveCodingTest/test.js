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

let a = func();

a.add(1);
a.add(2);
a.add(3);
a.pop();

console.log(a);
