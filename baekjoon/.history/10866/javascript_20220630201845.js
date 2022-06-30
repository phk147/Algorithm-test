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
function solution() {}

solution();
