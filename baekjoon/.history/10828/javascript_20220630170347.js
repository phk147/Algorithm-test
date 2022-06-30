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

let stack = [];
let answer = [];

function solution() {
  let n = +input.shift();

  for (let i = 0; i < n; i++) {
    let cmd = input.shift().split(" ");

    switch (cmd[0]) {
      case "push":
        stackPush(+cmd[1]);
        break;
      case "pop":
        stackPop();
        break;
      case "size":
        stackSize();
        break;
      case "empty":
        stackEmpty();
        break;
      default:
        stackTop();
        break;
    }

    console.log(answer.join("\n"));
  }
}

function stackPush(num) {
  stack.push(num);
}

function stackPop() {
  if (stack.length === 0) answer.push(-1);
  else {
    let num = stack.pop();
    answer.push(num);
  }
}

function stackSize() {
  answer.push(stack.length);
}

function stackEmpty() {
  if (stack.length === 0) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

function stackTop() {
  if (stack.length === 0) answer.push(-1);
  else {
    let num = stack[stack.length - 1];
    answer.push(num);
  }
}

solution();
