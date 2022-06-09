/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

//swaprow
function swapRow(candys, row, col) {
  let tmp = candys[row][col];
  candys[row][col] = candys[row + 1][col];
  candys[row + 1][col] = tmp;
}

//swapcol
function swapCol(candys, row, col) {
  let tmp = candys[row][col];
  candys[row][col] = candys[row][col + 1];
  candys[row][col + 1] = tmp;
}
function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let n = input.splice(0, 1)[0];
  let candys = [];
  input.forEach((candy) => candys.push(candy.split("")));
  console.log(n, candys);

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {}
  }
}

solution();
