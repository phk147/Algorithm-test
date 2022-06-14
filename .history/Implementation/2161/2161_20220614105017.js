/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return false;
    }
    const data = this.head.data;
    this.head = this.head.next;
    this.length--;
    return data;
  }

  front() {
    return this.head && this.head.data;
  }
}

function solution() {
  let input = +require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim())[0];

  const queue = new Queue();

  for (let i = 1; i <= input; i++) {
    queue.enqueue(i);
  }

  let ans = [];
  while (queue.length > 0) {
    let tmp = queue.front();
    queue.dequeue();
    ans.push(tmp);

    tmp = queue.front();
    queue.enqueue(tmp);
  }

  console.log(ans);
}

solution();
