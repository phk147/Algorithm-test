/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
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

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  const testNum = input.shift();

  let answer = [];
  let queue = new Queue(); //fifo

  input.forEach((val) => {
    switch (val) {
      case "pop":
        console.log(queue.size() === 0 ? -1 : queue.front());
        queue.pop();
        break;
      case "size":
        console.log(queue.size());
        break;
      case "empty":
        answer.push(queue[0] ? 0 : 1);
        break;
      case "front":
        answer.push(queue[0] || -1);
        break;
      case "back":
        answer.push(queue[queue.length - 1] || -1);
        break;
      default:
        queue.push(val.split(" ")[1]);
        break;
    }
  });

  console.log(answer.join("\n"));
}

solution();
