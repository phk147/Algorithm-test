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
function solution(input) {
  //input
  let n = +input.shift();
  let arr = [];

  for (let i = 0; i < n; i++) {
    let temp = input.shift().split(" ");
    arr.push(temp);
  }

  let max_y = -Infinity;
  let min_y = Infinity;

  arr.forEach((v) => {
    let year = v[3];
    max_y = Math.max(max_y, year);
    min_y = Math.min(min_y, year);
  });

  let max = arr.filter((v) => +v[3] === min_y);
  let min = arr.filter((v) => +v[3] === max_y);

  if (max.length > 1 || min.length > 1) {
    let max_m = -Infinity;
    let min_m = Infinity;

    if (max.length > 1) {
      max.forEach((v) => {
        let month = v[2];
        min_m = Math.min(min_y, month);
      });
    } else if (min.length > 1) {
      min.forEach((v) => {
        let month = v[2];
        max_m = Math.max(max_y, month);
      });
    }
  }

  console.log(max, min);
}

solution(input);
