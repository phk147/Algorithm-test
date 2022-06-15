class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.data[head] = data;
    this.tail++;
  }

  pop() {
    this.head++;
  }

  front() {
    let data = this.data[this.head];
    return data;
  }
}
