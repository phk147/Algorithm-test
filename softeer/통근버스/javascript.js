/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let n = +input.shift();
let bus = input
  .shift()
  .split(" ")
  .map((v) => +v);

let count = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = 1; j < n - 1; j++) {
    for (let k = 2; k < n; k++) {
      if (bus[i] < bus[j] && bus[i] > bus[k]) count++;
    }
  }
}

console.log(count);
