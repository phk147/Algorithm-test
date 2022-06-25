let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let arr = input[0].split(" ").map((v) => +v);
  let target = +input[1];
  //Submit
  let left = 0;
  let right = 0;

  while (1) {
    if (left === right) right++;
    let sum = arr[left] + arr[right];

    if (sum === target) break;
    else if (sum < target) right++;
    else left++;
  }

  console.log(arr, target, [left, right]);
  return [left, right];
}

solution(input);
