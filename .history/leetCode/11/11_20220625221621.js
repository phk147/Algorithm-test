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
  let left = 0;
  let right = height.length - 1;

  let max = -Infinity;

  while (left < right) {
    let width = right - left;
    let vertical = Math.min(height[left], height[right]);
    let water = width * vertical;

    max = Math.max(max, water);

    if (height[left] > height[right]) right--;
    else left++;
  }

  console.log(max);
}

solution(input);
