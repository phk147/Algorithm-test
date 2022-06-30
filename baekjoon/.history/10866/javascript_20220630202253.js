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

const MX = 1000005;
class Deque {
  constructor() {
    this.arr = new Array(2 * MX + 1);
    this.head = MX;
    this.tail = MX;
  }
  push_front(data) {
    this.arr[--this.head] = data;
  }
  push_back(data) {
    this.arr[this.tail++] = data;
  }
  pop_front() {
    this.head++;
  }
  pop_back() {
    this.tail--;
  }
  front() {
    return this.arr[this.head];
  }
  back() {
    return this.arr[this.tail - 1];
  }
  size() {
    return this.tail - this.head;
  }
  empty() {
    if (this.head === this.tail) return true;
    else return false;
  }
}

let deque = new Deque();
let answer = [];
function solution() {
  let n = +input.shift();
  for (let i = 0; i < n; i++) {
    let cmd = input.shift().split(" ");

    switch (cmd[0]) {
      case "push_front":
        dequePush_front(+cmd[1]);
        break;
      case "push_back":
        dequePush_back(+cmd[1]);
        break;
      case "pop_front":
        dequePop_front();
        break;
      case "pop_back":
        dequePop_back();
        break;
      case "size":
        dequeSize();
        break;
      case "empty":
        dequeEmpty();
        break;
      case "front":
        dequeFront();
        break;
      default:
        dequeBack();
        break;
    }
  }
  console.log(answer.join("\n"));
}

function dequePush_front(num) {
  queue.push_front(num);
}

function dequePush_back(num) {
  queue.push_back(num);
}

function dequePop_front() {
  if (queue.empty()) answer.push(-1);
  else {
    let temp = deque.front;
    deque.pop_front();
    answer.push(temp);
  }
}
function dequePop_back() {
  if (queue.empty()) answer.push(-1);
  else {
    let temp = deque.back;
    deque.pop_back();
    answer.push(temp);
  }
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
