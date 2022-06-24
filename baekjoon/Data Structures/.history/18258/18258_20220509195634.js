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
    .split("\n")
    .map((val) => val.trim());

  const testNum = input.shift();

  let answer = [];
  let queue = []; //fifo

  input.forEach((val) => {
    switch (val) {
      case "pop":
        queue[0] ? answer.push(queue.shift()) : answer.push(-1);
        break;
    }
  });

  console.log(answer);
}

solution();
