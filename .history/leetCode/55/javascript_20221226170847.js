let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split(",")
  .map((val) => val.trim());

function solution(input) {
  //input
  //Submit
  console.log(input);
  let len = input.length - 1;
  let nums = input.map((v) => +v);

  let count = 0;
  while (1) {
    count += nums[count];
    console.log(count);

    if (count === len) return true;
    else if (count > len) return false;
  }
}

console.log(solution(input));
