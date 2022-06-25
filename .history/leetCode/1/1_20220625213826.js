let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let nums = input[0].split(" ").map((v) => +v);
  let arr = nums.slice();
  let target = +input[1];
  //Submit
  let left = 0;
  let right = 1;

  arr.sort((a, b) => a - b);

  while (1) {
    if (left === right) right++;
    let sum = arr[left] + arr[right];

    if (sum === target) break;
    else if (sum < target) right++;
    else left++;
  }

  let ans_l = nums.indexOf(arr[left]);
  nums.splice(ans_l, 1);
  let ans_r = nums.indexOf(arr[right]);

  console.log(answer);
  return answer;
}

solution(input);
