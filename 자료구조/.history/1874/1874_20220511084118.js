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

  let testNum = input.shift();
  let stack = [];
  let answer = [];
  input.forEach((num) => {
    if (stack.indexOf(num) === -1) {
      for (let i = stack[stack.length - 1]; i <= num; i++) {
        stack.push(i);
        answer.push("+");
        if (i === num) {
          answer.push("+");
          answer.push("-");
        }
      }
    } else if (stack.indexOf(num) === num - 1) {
      stack.pop();
      answer.push("-");
    } else {
      for (let j = stack.length; j >= stack.indexOf(num); j--) {}
    }
  });

  console.log(input, testNum);
}

solution();

//[4,3,6,8,7,5,2,1]
