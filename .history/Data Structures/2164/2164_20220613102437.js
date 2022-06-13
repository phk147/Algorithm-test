/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

class Queue {
  constructor(){
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  size(){
    if(this.storage[rear] === undefined){
      return 0;
    } else {
      return this.rear-this.front +1;
    }
  }
}

function solution() {
  let input = +require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim())[0];

    let arr = [];
  for()
}

solution();
