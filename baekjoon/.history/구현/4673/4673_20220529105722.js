/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function d() {
  let arr = Array.from({ length: 100001 }, () => 0);
  for (let i = 1; i < 10001; i++) {
    let temp = toString(i);
    let psum = i;

    for (let j = 0; j < temp.length; j++) {
      psum += temp[j];
    }
    arr[psum] = 1;
  }
  return arr;
}

function solution() {}
let arr = [];

solution();
