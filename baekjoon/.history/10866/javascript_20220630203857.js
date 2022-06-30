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
        answer.push(deque.front);
        break;
      default:
        answer.push(deque.back);
        break;
    }
  }
  console.log(answer);
}

function dequePush_front(num) {
  deque.push_front(num);
}

function dequePush_back(num) {
  deque.push_back(num);
}

function dequePop_front() {
  if (deque.empty()) answer.push(-1);
  else {
    let temp = deque.front;
    deque.pop_front();
    answer.push(temp);
  }
}
function dequePop_back() {
  if (deque.empty()) answer.push(-1);
  else {
    let temp = deque.back;
    deque.pop_back();
    answer.push(temp);
  }
}

function dequeSize() {
  answer.push(deque.size());
}

function dequeEmpty() {
  if (deque.empty()) answer.push(1);
  else answer.push(0);
}

function dequeFront() {
  if (deque.empty()) answer.push(-1);
  else answer.push(deque.front());
}

function dequeBack() {
  if (deque.empty()) answer.push(-1);
  else answer.push(deque.back());
}

solution();
