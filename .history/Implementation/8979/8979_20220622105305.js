let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let country = [];
  for (let i = 0; i < n; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((v) => +v);
    country.push(temp);
  }

  console.log(n, k, country);
}

solution(input);
