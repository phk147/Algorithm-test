function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim())
    .map((v) => +v);

  let weights = input;
  // 2,3,4 에 자리가 있음
  // 하나의 값에서 비율을 전부 검사?
  let cnt = 0;

  let check = {};
  for (let i = 0; i < weights.length; i++) {}

  // for (let num of [n, (n / 2) * 3, (n / 2) * 4, (n / 3) * 2, (n / 3) * 4, (n / 4) * 2, (n / 4) * 3]) {
  //   cnt += check[num];
  // }
  console.log();
}

solution();
