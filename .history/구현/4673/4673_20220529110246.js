/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let arr = Array.from({ length: 100001 }, () => 0);
  for (let i = 1; i < 100; i++) {
    let temp = toString(i);
    let psum = i;

    for (let j = 0; j < temp.length; j++) {
      psum += Number(temp[j]);
    }
    arr[psum] = 1;
  }

  // for (let i = 1; i < 100; i++) {
  //   if (arr[i] === 1) console.log(i);
  // }
}

solution();
