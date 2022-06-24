class Stack {
  constructor() {
    this.data = [];
    this.index = 0;
  }

  push(data) {
    this.data[this.index] = data;
    this.index++;
  }

  pop() {
    if (this.index <= 0) return null;
    const result = this.data[--this.index];
    return result;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
