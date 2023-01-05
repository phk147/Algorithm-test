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

function solution() {
  const [a, b, c] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  input = input.map((v) => v.split(" ").map((val) => +val));

  let result = 0;

  for (let i = 1; i <= 100; i++) {
    // 트럭 3개 확인 -> 더하기
    let cnt = 0;
    if (i >= input[0][0] && i <= input[0][1]) cnt++;
    if (i >= input[1][0] && i <= input[1][1]) cnt++;
    if (i >= input[2][0] && i <= input[2][1]) cnt++;

    if (cnt === 0) continue;
    else if (cnt === 1) result += a;
    else if (cnt === 2) result += b;
    else if (cnt === 3) result += c;

    console.log("cnt", cnt);
    console.log(result);
  }

  console.log(result);
}

solution();
