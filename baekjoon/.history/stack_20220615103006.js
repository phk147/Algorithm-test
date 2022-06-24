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
    const result = this.data[--this.index];
    delete this.data[this.index];
    return result;
  }

  top() {
    return this.data[this.index - 1];
  }

  size() {
    return this.index;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
let a = stack.pop();
stack.push(3);

console.log(stack.top());
console.log(stack.size());

console.log(a, stack);
