/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let len = input.shift();

  let answer = [];
  let stack = [];

  for (let i = 0; i < len; i++) {
    switch (input[i]) {
      case "pop":
        answer.push(stack.pop() || -1);
        break;

      case "size":
        answer.push(stack.length);
        break;

      case "empty":
        answer.push(stack[0] ? 0 : 1);
        break;

      case "top":
        answer.push(stack[stack.length - 1] || -1);
        break;

      default:
        stack.push(input[i].split(" ")[1]);
        break;
    }
  }

  console.log(answer.join("\n"));
}

solution();
