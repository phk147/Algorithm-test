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
    .map((val) => val.trim());

  let queue = [];
  let answer = [];
  for (let i = 1; i <= input[0]; i++) {
    queue.push(i);
  }

  let count = 1;
  while (queue.length) {
    const shiftNum = queue.shift();
    if (count === input[1]) {
      answer.push(shiftNum);
    } else {
      queue.push(shiftNum);
    }
    count += 1;
  }

  console.log(arr);
}

solution();

// [1,2,3,4,5,6,7] 2
// [1,2,4,5,6,7] 4
// [1,2,4,5,7] 1
// [1,4,5,7] 3
// [1,4,5] 2
// [1,4] 1
// [1,2,3,4,5,6,7]
