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

function solution() {
  let n = +input.shift();

  for (let i = 0; i < n; i++) {
    let cmd = input.shift().split(" ");

    switch (cmd[0]) {
      case "push":
        break;
      case "pop":
        break;
      case "size":
        break;
      case "empty":
        break;
      default:
        break;
    }

    console.log(cmd);
  }
}

function stackPush(num) {
  stack.push(num);
}

function stackPop() {
  if (stack.length === 0) console.log(-1);
  else {
    let num = stack.pop();
    console.log(num);
  }
}

solution();
