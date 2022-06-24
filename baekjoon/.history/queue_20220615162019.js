class Queue {
  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data) {
    this.data[this.tail] = data;
    this.tail++;
  }

  pop() {
    this.head++;
  }

  front() {
    let data = this.data[this.head];
    return data;
  }

  back() {
    let data = this.data[this.tail - 1];
    return data;
  }
  size() {
    let size = this.tail - this.head;
    return size;
  }
}

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue);
console.log(queue.size());
