let nums = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split(",")
  .map((val) => val.trim());

function solution(nums) {
  //input
  //Submit
  const n = nums.length;

  let goal = n - 1;
  for (let i = n - 1; i >= 0; i--) if (i + nums[i] >= goal) goal = i;

  return goal === 0 ? true : false;
}

solution(nums)
