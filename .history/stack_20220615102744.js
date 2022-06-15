class Stack {
  constructor() {
    this.data = [];
    this.index = 0;
  }

  push(data) {
    this.data[this.index++] = data;
  }

  pop() {
    if (this.index <= 0) return null;
    this.index--;
    const result = this.data[--this.index];
    delete this.data[this.index];
    return result;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
let a = stack.pop();
console.log(a, stack);
