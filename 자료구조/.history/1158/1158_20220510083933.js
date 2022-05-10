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
  let k = input[1];

  for (let i = 1; i <= input[0]; i++) {
    queue.push(i);
  }

  let count = 1;
  while (queue.length) {
    const shiftNum = queue.shift();
    if (count % k === 0) {
      answer.push(shiftNum);
    } else {
      queue.push(shiftNum);
    }
    count += 1;
  }

  console.log(answer);
}

solution();
