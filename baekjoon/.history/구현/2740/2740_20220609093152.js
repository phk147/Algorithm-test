/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  //matrix A
  let [n, m] = input.splice(0, 1).join("").split(" ");
  let a = [];
  for (let i = 0; i < n; i++) {
    let x = input.splice(0, 1);
    a.push(x[0].split(" "));
  }
  //matrix B
  let [h, k] = input.splice(0, 1).join("").split(" ");
  let b = [];
  for (let i = 0; i < h; i++) {
    let y = input.splice(0, 1);
    b.push(y[0].split(" "));
  }

  //matrix multiplication
  let ans = multiplication(a, b);
  //output
  ans.forEach((arr) => {
    console.log(arr.join(" "));
  });
}

function multiplication(a, b) {
  let ans = [];
  let n = a.length;
  let m = a[0].length;
  let k = b[0].length;
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < k; j++) {
      let mul = 0;
      for (let c = 0; c < m; c++) {
        mul += a[i][c] * b[c][j];
      }
      tmp.push(mul);
    }
    ans.push(tmp);
  }
  return ans;
}

solution();
