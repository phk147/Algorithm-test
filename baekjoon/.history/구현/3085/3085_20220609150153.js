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

//Max check
function maxCheck(candys, n) {
  let max = -9999;
  for (let i = 0; i < n; i++) {
    let cnt_row = 1;
    let cnt_col = 1;
    for (let j = 0; j < n; j++) {
      if (candys[i][j] === candys[i][j + 1]) {
        cnt_row++;
      } else {
        max = Math.max(max, cnt_row);
        cnt_row = 1;
      }

      if (candys[j][i] === candys[j + 1][i]) {
        cnt_col++;
      } else {
        max = Math.max(max, cnt_col);
        cnt_col = 1;
      }
    }
    max = Math.max(max, cnt_row, cnt_col);
  }
  return max;
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

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (candys[i][j] !== candys[i][j + 1]) {
        swapRow(candys, i, j);
        ans = Math.max(ans, maxCheck(candys, n));
        swapRow(candys, i, j);
      }

      if (candys[i][j] !== candys[i + 1][j]) {
        swapCol(candys, i, j);
        ans = Math.max(ans, maxCheck(candys, n));
        swapCol(candys, i, j);
      }
    }
  }

  console.log(maxCheck(candys, n));
}

solution();
