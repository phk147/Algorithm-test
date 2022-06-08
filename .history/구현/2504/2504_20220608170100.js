/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  input = input.join("").split("");
  let test = input.splice(1, 2, 2);
  console.log(test);
  let ans;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(" && input[i + 1] === ")") {
      ans = input.splice(i, 2, "2");
      console.log(ans);
    }

    if (input[i] === "[" && input[i + 1] === "]") {
      ans = input.splice(i, 2, "3");
    }
  }
  console.log(ans);
}

solution();
