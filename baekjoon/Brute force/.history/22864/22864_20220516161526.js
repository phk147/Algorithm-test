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
    .split(" ")
    .map((val) => Number(val.trim()));

  const [a, b, c, m] = input;
  let answer = [a, b];

  if (a > m) {
    return console.log(0);
  }

  for (let i = 2; i < 25; i++) {
    if (answer[0] >= m - a) {
      answer[0] -= c;
    } else {
      answer[0] += a;
      answer[1] += b;
    }
  }

  console.log(answer[1]);
}

solution();

// 1 [10,5]  10
// -10 [0,5]
// 1 [10,10]
// -10 [0,10]
// 2 [10,12]
