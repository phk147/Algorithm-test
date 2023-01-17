/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [m, n, k] = input
  .shift()
  .split(" ")
  .map((v) => +v);

let secret = input
  .shift()
  .split(" ")
  .map((v) => +v);

let user = input
  .shift()
  .split(" ")
  .map((v) => +v);

const solution = () => {
  if (n < m) {
    console.log("normal");
    return;
  }

  let check = false;

  for (let i = 0; i <= n - m; i++) {
    let check2 = true;
    for (let j = 0; j < m; j++) {
      if (secret[j] !== user[i + j]) check2 = false;
    }
    if (check2) check = true;
  }

  if (check) console.log("secret");
  else console.log("normal");
};

solution();
