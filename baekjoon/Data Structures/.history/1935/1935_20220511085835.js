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

  const [n, ...nums] = input;
  const numbers = nums.map((val) => +val);

  const stack = [];
  let answer = [];
  let count = 1;

  for (let i = 0; i < n; i++) {
    const number = numbers.shift();

    while (count <= number) {
      stack.push(count++);
      answer.push("+");
    }

    const popNum = stack.pop();
    if (popNum !== number) {
      return console.log("NO");
    }
    answer.push("-");
  }

  return console.log(answer.join("\n"));
}

solution();
