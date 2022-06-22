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
  let rank = 1;
  for (let i = 0; i < n; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((v) => +v);
    country.push(temp);
  }

  let gold = country.filter((v) => v[1] >= country[k - 1][1]);
  let 
  console.log(n, k, country, gold);
}

solution(input);
