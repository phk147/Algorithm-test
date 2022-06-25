const { Verify } = require("crypto");

let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let height = input[0].split(" ").map((v) => +v);
  //Submit
  let max = -Infinity;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let width = j - i;
      let vertical = Math.min(height[i], height[j]);
      let water = width * vertical;
      max = Math.max(max, water);
    }
  }
}

solution(input);
