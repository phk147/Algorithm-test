/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let n = +input.shift();
  let str = input.map((v) => v.split(""));
  let stack = [];
  let result = 0;

  str.forEach((v) => {
    let len = v.length;
    for (let i = 0; i < len; i++) {
      let temp = v.pop();
      if (stack.length === 0) stack.push(temp);
      else if (stack.at(-1) === temp) stack.pop();
      else stack.push(temp);
    }

    if (stack.length === 0) result++;

    stack = [];
  });

  console.log(result);
}

solution();
