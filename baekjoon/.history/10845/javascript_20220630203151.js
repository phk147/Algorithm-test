/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

let answer = [];

class Queue {
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }
  push(data) {
    this.arr[this.tail++] = data;
  }
  pop() {
    return this.arr[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
  empty() {
    if (this.head === this.tail) return true;
    else return false;
  }
  front() {
    return this.arr[this.head];
  }
  back() {
    return this.arr[this.tail - 1];
  }
}

let queue = new Queue();

function solution() {
  let n = +input.shift();

  for (let i = 0; i < n; i++) {
    let cmd = input.shift().split(" ");

    switch (cmd[0]) {
      case "push":
        queuePush(+cmd[1]);
        break;
      case "pop":
        queuePop();
        break;
      case "size":
        queueSize();
        break;
      case "empty":
        queueEmpty();
        break;
      case "front":
        queueFront();
        break;
      default:
        queueBack();
        break;
    }
  }
  console.log(answer.join("\n"));
}

function queuePush(num) {
  queue.push(num);
}

function queuePop() {
  if (queue.empty()) answer.push(-1);
  else answer.push(queue.pop());
}

function queueSize() {
  answer.push(queue.size());
}

function queueEmpty() {
  if (queue.empty()) answer.push(1);
  else answer.push(0);
}

function queueFront() {
  if (queue.empty()) answer.push(-1);
  else answer.push(queue.front());
}

function queueBack() {
  if (queue.empty()) answer.push(-1);
  else answer.push(queue.back());
}

solution();
