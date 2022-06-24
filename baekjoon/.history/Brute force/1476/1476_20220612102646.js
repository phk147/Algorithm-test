/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  const [E, S, M] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
  let year = 1;
  while (true) {
    if ((year - E) % 15 === 0 && (year - S) % 28 === 0 && (year - M) % 19 === 0) {
      console.log(year);
      process.exit();
      break;
    }
    year++;
  }
}

solution();
