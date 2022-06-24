/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function checkColor(map) {
  let num = 8;
  let cnt = 0;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if (map[i][j] === map[i][j + 1]) {
        if (map[i][j] === "W") map[i][j + 1] = "B";
        else mao[i][j + 1] = "W";
        cnt++;
      }
    }
  }

  return cnt;
}

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  console.log(input);
}

solution();
