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
  let f = 0;
  let w = 0;

  for (let i = 0; i < 24; i++) {
    if (m - f < a) {
      f -= c;
      if (f < 0) {
        f = 0;
      }
    } else {
      f += a;
      w += b;
    }
  }

  console.log(w);
}

solution();

// 1 [10,5]  10
// -10 [0,5]
// 1 [10,10]
// -10 [0,10]
// 2 [10,12]
